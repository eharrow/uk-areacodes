import { UKAreaCodeLookup } from '../src/UKAreaCodeLookup';

test('should return Luton for 01582', () => {
    const conv = new UKAreaCodeLookup();
    expect(conv.lookup('01582')).toBe('Luton');
});

test('should return undefined for unknown', () => {
    const conv = new UKAreaCodeLookup();
    expect(conv.lookup('hello')).toBe(undefined);
});

test('should return Luton for 0158212345678', () => {
    const conv = new UKAreaCodeLookup();
    expect(conv.startsWith('0158212345678')).toBe('Luton');
});

test('should return undefined for unknown', () => {
    const conv = new UKAreaCodeLookup();
    expect(conv.startsWith('hello')).toBe(undefined);
});