
// ==========================================
// 1. TYPE DEFINITIONS (Based on your JSON)
// ==========================================

import { Media } from "../payload-types";

export interface VariantOption {
  id: string;
  label: string;
  value: string;
  variantType: {
    id: string;
    label: string;
    name: string;
  } | string; // Can be object or ID reference
}

export interface VariantType {
  id: string;
  label: string; // e.g., "Color", "Size"
  name: string;  // e.g., "color", "size"
  options: {
    docs: VariantOption[];
  };
}

export interface ProductGallery {
  id: string;
  variantOption?: VariantOption | null; // e.g., Linked to "Navy"
  image: Media[];
}

export interface ProductSKU {
  id: string;
  title: string; // e.g., "Áo... - Navy - Size L"
  priceInVND?: number;
  priceInUSD?: number;
  inventory: number;
  options: VariantOption[]; // The specific combo options (e.g., [NavyObj, SizeLObj])
}

export interface ProductData {
  id: string;
  title: string;
  priceInVND?: number;
  priceInUSD?: number;
  variantTypes: VariantType[];
  gallery: ProductGallery[];
  variants: {
    docs: ProductSKU[];
  };
}

// ==========================================
// 2. HELPER CLASS
// ==========================================

export class ProductHelper {
  private product: ProductData;

  constructor(product: ProductData) {
    this.product = product;
  }

  /**
   * Get list of attributes to render UI (e.g., Color selectors, Size selectors)
   */
  getAttributes() {
    return this.product.variantTypes.map((type) => ({
      id: type.id,
      name: type.label, // Display name: "Color", "Size"
      slug: type.name,  // System name: "color", "size"
      options: type.options.docs.map((opt) => ({
        id: opt.id,
        label: opt.label,
        value: opt.value, // e.g., Hex code for color or "S/M/L" for size
        // Helper to check if this specific option is linked to images
        hasImages: this.hasSpecificImages(opt.id),
      })),
    }));
  }

  /**
   * Get the correct gallery images.
   * Logic:
   * 1. If a variantOptionId is provided (e.g., user clicked "Navy"), return images for that variant.
   * 2. If no ID provided or no specific images found, return the default gallery (usually the first one or one without variantOption).
   */
  getGallery(selectedVariantOptionId?: string | null): Media[] {
    const galleries = this.product.gallery || [];

    // 1. Try to find gallery matching the selected option ID (e.g., Color ID)
    if (selectedVariantOptionId) {
      const specificGallery = galleries.find(
        (g) => g.variantOption && g.variantOption.id === selectedVariantOptionId
      );
      if (specificGallery && specificGallery.image.length > 0) {
        return specificGallery.image;
      }
    }

    // 2. Fallback: Return the first gallery group that has images
    // (Preferably one without a specific variantOption, or just the first one)
    const defaultGallery = galleries.find((g) => !g.variantOption) || galleries[0];
    return defaultGallery?.image || [];
  }

  /**
   * Find the specific Stock Keeping Unit (SKU) based on selected options.
   * @param selectedOptionIds Map of selected IDs. e.g. { "color": "id_navy", "size": "id_s" }
   */
  getSKU(selectedOptionIds: Record<string, string>): ProductSKU | null {
    const variants = this.product.variants?.docs || [];
    
    // We need to match ALL selected IDs.
    // However, the input might be partial (user selected Color but not Size yet).
    // This function returns a SKU only if strictly matched.
    const selectedValues = Object.values(selectedOptionIds);
    if (selectedValues.length === 0) return null;

    return variants.find((variant) => {
      // Check if this variant contains ALL the selected option IDs
      // Note: variant.options is an array of objects.
      const variantOptionIds = variant.options.map((opt) => opt.id);
      
      // Ensure every selected ID exists in this variant's options
      return selectedValues.every((id) => variantOptionIds.includes(id));
    }) || null;
  }

  /**
   * Check if a combination is possible/in stock.
   * Useful for disabling buttons (e.g., Disable "Size S" if "Red" is selected and Red+S is OOS).
   */
  isCombinationAvailable(selectedOptionIds: Record<string, string>): boolean {
    const sku = this.getSKU(selectedOptionIds);
    // It's available if SKU exists AND inventory > 0
    return !!sku && sku.inventory > 0;
  }

  /**
   * Calculate the price.
   * Logic: If a SKU is found, use its price. Otherwise, use the base product price.
   */
  getPrice(selectedOptionIds: Record<string, string>, currency: 'VND' | 'USD' = 'VND'): number {
    const sku = this.getSKU(selectedOptionIds);

    if (currency === 'VND') {
      return sku?.priceInVND ?? this.product.priceInVND ?? 0;
    } else {
      return sku?.priceInUSD ?? this.product.priceInUSD ?? 0;
    }
  }

  /**
   * Helper to check if an option ID (like a Color ID) is a key for switching images.
   */
  private hasSpecificImages(optionId: string): boolean {
    return this.product.gallery.some(g => g.variantOption?.id === optionId);
  }
}
