import { api } from "@/src/lib/axios";
import { trCache, tryQuery } from "@/src/lib/tryCatch";
import { Cart } from "@/src/payload-types";

// Fetch cart by user ID
export const fetchCart = async (userId: string) => {
    return tryQuery(async () => {
        // Fetch cart where customer equals userId
        // Note: api interceptor returns response.data
        const response = await api.get<{ docs: Cart[] }>(
            `/carts?where[customer][equals]=${userId}&depth=2`
        );
        // Return the first cart or null if not found
        // @ts-ignore: axios response structure handled by interceptor but typescript might not know
        return response.docs && response.docs.length > 0 ? response.docs[0] : null;
    });
};

// Create a new cart for the user
export const createCart = async (userId: string) => {
    const [result, err] = await trCache(async () => {
        return await api.post<Cart>(`/carts`, {
            customer: userId,
            items: [],
            status: 'active'
        });
    });
    if (err || !result) throw err;
    return result;
};

// Update cart items
export const updateCart = async (cartId: string, items: Cart['items']) => {
    const [result, err] = await trCache(async () => {
        return await api.patch<Cart>(`/carts/${cartId}`, {
            items
        });
    });
    if (err || !result) throw err;
    return result;
};
