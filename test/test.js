"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UKAreaCodeLookup_1 = require("../src/UKAreaCodeLookup");
test('should return Luton for 01582', () => {
    const conv = new UKAreaCodeLookup_1.UKAreaCodeLookup();
    expect(conv.lookup('01582')).toBe('Luton');
});
test('should return undefined for unknown', () => {
    const conv = new UKAreaCodeLookup_1.UKAreaCodeLookup();
    expect(conv.lookup('hello')).toBe(undefined);
});
//# sourceMappingURL=test.js.map