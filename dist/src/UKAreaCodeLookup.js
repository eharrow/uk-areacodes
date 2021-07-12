"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UKAreaCodeLookup = void 0;
const data = require('./areacodes-uk.json');
class UKAreaCodeLookup {
    lookup(areacode) {
        const hit = data.find((element) => element.code === areacode);
        return hit ? hit.area : undefined;
    }
}
exports.UKAreaCodeLookup = UKAreaCodeLookup;
//# sourceMappingURL=UKAreaCodeLookup.js.map