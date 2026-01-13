import { api } from "@/src/lib/axios";
import { tryQuery } from "@/src/lib/tryCatch";
import { Product } from "@/src/payload-types";
import { Lang, PaginationType } from "@/src/types";

export const findNewProduct = ({locale}:{locale:Lang}): Promise<PaginationType<Partial<Product>>> => 
    tryQuery(
        async () => {
            return await api.get(`/products?sort=-publishedAt&locale=${locale}`)
        }
    )
