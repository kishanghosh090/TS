"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "1M"; //UNION
// not good ... tooo bad
let anyType;
anyType = 2323;
anyType = "";
let apiRequestStatus;
apiRequestStatus = "PENDING";
var res;
(function (res) {
    res[res["PENDING"] = 0] = "PENDING";
    res[res["SUCCESS"] = 1] = "SUCCESS";
    res[res["ERROR"] = 2] = "ERROR";
})(res || (res = {}));
let response;
response = res.PENDING;
const orders = ["12", "20", "28", "42"];
let currentOrder;
for (const el of orders) {
    if (el === "28") {
        currentOrder = el;
        break;
    }
    currentOrder = "32";
}
// currentOrder = 23;
console.log(currentOrder);
//# sourceMappingURL=unionAndAny.js.map