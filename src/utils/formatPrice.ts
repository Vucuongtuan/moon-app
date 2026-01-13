import { Product } from "../payload-types";


export const formatPriceVND = (price?: number | null) => {
    if (!price) return '';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

export const formatPriceUSD = (price?: number | null) => {
    if (!price) return '';
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}


export const formatPrice = (item:Product, locale?: string) => {
  const enableVND = item.priceInVNDEnabled && item.priceInVND;
          const enableUSD = item.priceInUSDEnabled && item.priceInUSD;
  
          if (enableVND && enableUSD) {
              return locale === 'vi' ? formatPriceVND(item.priceInVND) : formatPriceUSD(item.priceInUSD);
          }
          if (enableVND) return formatPriceVND(item.priceInVND);
          if (enableUSD) return formatPriceUSD(item.priceInUSD);
          
          return null;
}