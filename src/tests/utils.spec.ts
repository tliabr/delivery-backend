import { calculateTotalPouchesPrice, formatCatNames } from '../utils';
import { PouchSize } from '../models/user';

describe('calculateTotalPouchesPrice', () => {
  it('should return 0 for no pouches', () => {
    expect(calculateTotalPouchesPrice([])).toBe(0);
  });

  it('should calculate the total price for given pouch sizes', () => {
    const pouches: PouchSize[] = ['A', 'B', 'C'];
    expect(calculateTotalPouchesPrice(pouches)).toBe(55.5 + 59.5 + 62.75);
  });

  it('should handle a single pouch', () => {
    const pouches: PouchSize[] = ['F'];
    expect(calculateTotalPouchesPrice(pouches)).toBe(71.25);
  });
});

describe('formatCatNames', () => {
  it('should return an empty string for no cat names', () => {
    expect(formatCatNames([])).toBe('');
  });

  it('should return the single name when one cat is provided', () => {
    expect(formatCatNames(['Whiskers'])).toBe('Whiskers');
  });

  it('should format two cat names correctly', () => {
    expect(formatCatNames(['Whiskers', 'Fluffy'])).toBe('Whiskers and Fluffy');
  });

  it('should format multiple cat names correctly', () => {
    expect(formatCatNames(['Whiskers', 'Fluffy', 'Bella'])).toBe(
      'Whiskers, Fluffy and Bella',
    );
  });
});
