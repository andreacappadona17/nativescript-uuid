"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
var core_1 = require("@nativescript/core");
function getUUID() {
    return core_1.Device.uuid ? core_1.Device.uuid : '';
}
exports.getUUID = getUUID;
//# sourceMappingURL=index.android.js.map