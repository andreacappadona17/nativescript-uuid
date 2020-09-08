"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
function getUUID() {
    var appName = NSBundle.mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
    var strApplicationUUID = SAMKeychain.passwordForServiceAccount(appName, "incoding");
    if (!strApplicationUUID) {
        strApplicationUUID = UIDevice.currentDevice.identifierForVendor.UUIDString;
        SAMKeychain.setPasswordForServiceAccount(strApplicationUUID, appName, "incoding");
    }
    return strApplicationUUID;
}
exports.getUUID = getUUID;
//# sourceMappingURL=index.ios.js.map