import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Cart, Product, Variant } from "../payload-types";
import {
  createCart as createCartAPI,
  fetchCart as fetchCartAPI,
  updateCart as updateCartAPI,
} from "../service/rest/cart";

interface CartState {
  cart: Cart | null;
  isLoading: boolean;
  error: string | null;

  initializeCart: (userId: string) => Promise<void>;
  addToCart: (product: Product, quantity: number, variant?: Variant) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: null,
      isLoading: false,
      error: null,

      initializeCart: async (userId: string) => {
        set({ isLoading: true, error: null });
        try {
          let cartOrError = await fetchCartAPI(userId);

          if (cartOrError instanceof Error) {
             set({ error: cartOrError.message, isLoading: false });
             return;
          }

          let cart = cartOrError;
          if (!cart) {
            cart = await createCartAPI(userId);
          }

          set({ cart: cart as Cart, isLoading: false });
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
        }
      },

      addToCart: async (product, quantity, variant) => {
        const { cart } = get();
        if (!cart) return;

        set({ isLoading: true, error: null });
        try {
            const currentItems = cart.items || [];
            let updatedItems = [...currentItems];

            // Check if item already exists
            const existingItemIndex = updatedItems.findIndex((item) => {
                const itemProductId = typeof item.product === 'string' ? item.product : item.product?.id;
                const itemVariantId = typeof item.variant === 'string' ? item.variant : item.variant?.id;

                const productId = product.id;
                const variantId = variant?.id;

                // Handle undefined variantId
                if (variantId) {
                    return itemProductId === productId && itemVariantId === variantId;
                }
                return itemProductId === productId && !itemVariantId;
            });

            if (existingItemIndex > -1) {
                // Update quantity
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + quantity
                };
            } else {
                // Add new item
                updatedItems.push({
                    product: product,
                    variant: variant,
                    quantity,
                });
            }

            // Optimistic update
            set({ cart: { ...cart, items: updatedItems } });

            // Prepare items for API (only IDs)
            const itemsForApi = updatedItems.map(item => ({
                product: typeof item.product === 'string' ? item.product : item.product?.id,
                variant: item.variant ? (typeof item.variant === 'string' ? item.variant : item.variant.id) : null,
                quantity: item.quantity,
                id: item.id // Preserve ID if exists
            }));

            const updatedCart = await updateCartAPI(cart.id, itemsForApi);
            set({ cart: updatedCart, isLoading: false });

        } catch (error: any) {
            set({ error: error.message, isLoading: false });
            // Revert or fetch cart again
            const userId = typeof cart.customer === 'string' ? cart.customer : cart.customer?.id;
            if(userId) get().initializeCart(userId);
        }
      },

      removeFromCart: async (itemId: string) => {
        const { cart } = get();
        if (!cart || !cart.items) return;

        set({ isLoading: true, error: null });
        try {
            const updatedItems = cart.items.filter(item => item.id !== itemId);

             // Optimistic update
            set({ cart: { ...cart, items: updatedItems } });

             // Prepare items for API
            const itemsForApi = updatedItems.map(item => ({
                product: typeof item.product === 'string' ? item.product : item.product?.id,
                variant: item.variant ? (typeof item.variant === 'string' ? item.variant : item.variant.id) : null,
                quantity: item.quantity,
                id: item.id
            }));

            const updatedCart = await updateCartAPI(cart.id, itemsForApi);
            set({ cart: updatedCart, isLoading: false });

        } catch (error: any) {
             set({ error: error.message, isLoading: false });
             const userId = typeof cart.customer === 'string' ? cart.customer : cart.customer?.id;
             if(userId) get().initializeCart(userId);
        }
      },

      updateQuantity: async (itemId, quantity) => {
        const { cart } = get();
        if (!cart || !cart.items) return;

        if (quantity <= 0) {
            return get().removeFromCart(itemId);
        }

        set({ isLoading: true, error: null });
        try {
             const updatedItems = cart.items.map(item => {
                 if (item.id === itemId) {
                     return { ...item, quantity };
                 }
                 return item;
             });

            // Optimistic update
            set({ cart: { ...cart, items: updatedItems } });

             // Prepare items for API
            const itemsForApi = updatedItems.map(item => ({
                product: typeof item.product === 'string' ? item.product : item.product?.id,
                variant: item.variant ? (typeof item.variant === 'string' ? item.variant : item.variant.id) : null,
                quantity: item.quantity,
                id: item.id
            }));

            const updatedCart = await updateCartAPI(cart.id, itemsForApi);
            set({ cart: updatedCart, isLoading: false });
        } catch (error: any) {
             set({ error: error.message, isLoading: false });
             const userId = typeof cart.customer === 'string' ? cart.customer : cart.customer?.id;
             if(userId) get().initializeCart(userId);
        }
      },

      clearCart: async () => {
         const { cart } = get();
         if (!cart) return;

         set({ isLoading: true, error: null });
         try {
             const updatedCart = await updateCartAPI(cart.id, []);
             set({ cart: updatedCart, isLoading: false });
         } catch (error: any) {
             set({ error: error.message, isLoading: false });
         }
      }

    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
