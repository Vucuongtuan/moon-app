import { formatPriceUSD, formatPriceVND, formatPrice } from './formatPrice';
import { Product } from '../payload-types';

describe('formatPriceUSD', () => {
  it('should format positive integers correctly', () => {
    expect(formatPriceUSD(10)).toBe('$10.00');
    expect(formatPriceUSD(1234)).toBe('$1,234.00');
  });

  it('should format positive decimals correctly and round to 2 decimal places', () => {
    expect(formatPriceUSD(10.5)).toBe('$10.50');
    expect(formatPriceUSD(10.555)).toBe('$10.56');
    expect(formatPriceUSD(10.554)).toBe('$10.55');
  });

  it('should format large numbers with commas', () => {
    expect(formatPriceUSD(1000000)).toBe('$1,000,000.00');
  });

  it('should return an empty string for zero (current implementation)', () => {
    expect(formatPriceUSD(0)).toBe('');
  });

  it('should return an empty string for null or undefined', () => {
    expect(formatPriceUSD(null)).toBe('');
    expect(formatPriceUSD(undefined)).toBe('');
  });

  it('should format negative numbers correctly', () => {
    expect(formatPriceUSD(-10)).toBe('-$10.00');
  });
});

describe('formatPriceVND', () => {
  it('should format VND correctly', () => {
    // Note: VND formatting might have non-breaking spaces or different currency symbol placement
    // In Node/Bun, it usually looks like "10.000 ₫" or "₫ 10.000"
    const result = formatPriceVND(10000);
    expect(result).toMatch(/10\.000/);
    expect(result).toMatch(/₫/);
  });

  it('should return an empty string for zero, null, or undefined', () => {
    expect(formatPriceVND(0)).toBe('');
    expect(formatPriceVND(null)).toBe('');
    expect(formatPriceVND(undefined)).toBe('');
  });
});

describe('formatPrice', () => {
  const mockProduct: Product = {
    id: '1',
    title: 'Test Product',
    priceInUSDEnabled: true,
    priceInUSD: 10,
    priceInVNDEnabled: true,
    priceInVND: 250000,
    taxonomies: { gender: 'men' },
    slug: 'test-product',
    updatedAt: '',
    createdAt: '',
  };

  it('should return USD price by default (non-vi locale)', () => {
    expect(formatPrice(mockProduct, 'en')).toBe('$10.00');
  });

  it('should return VND price for vi locale when both are enabled', () => {
    const result = formatPrice(mockProduct, 'vi');
    expect(result).toMatch(/250\.000/);
    expect(result).toMatch(/₫/);
  });

  it('should return VND if only VND is enabled', () => {
    const vndOnly = { ...mockProduct, priceInUSDEnabled: false };
    const result = formatPrice(vndOnly, 'en');
    expect(result).toMatch(/250\.000/);
    expect(result).toMatch(/₫/);
  });

  it('should return USD if only USD is enabled', () => {
    const usdOnly = { ...mockProduct, priceInVNDEnabled: false };
    expect(formatPrice(usdOnly, 'vi')).toBe('$10.00');
  });

  it('should return null if neither is enabled or prices are missing', () => {
    const noneEnabled = { ...mockProduct, priceInUSDEnabled: false, priceInVNDEnabled: false };
    expect(formatPrice(noneEnabled)).toBeNull();
  });
});
