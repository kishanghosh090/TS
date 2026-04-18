"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlav = ["Masala", "Elaychi"];
const chaiPrice = [23, 4443, 43434];
const rating = [323, 323];
const menu = [
    {
        name: "Masala",
        price: 120,
    },
    {
        name: "Elychi",
        price: 130,
    },
    {
        name: "ginger",
        price: 110,
    },
];
const cities = ["Delhi", "jaipur"];
cities.at(1);
const table = [[], []];
let chaiTuple = ["masala", 20];
chaiTuple[0] = "";
const location = [23, 23];
const chaiItems = ["masala", 23];
var Status;
(function (Status) {
    Status[Status["SUCCESS"] = 200] = "SUCCESS";
    Status[Status["ERROR"] = 500] = "ERROR";
})(Status || (Status = {}));
const res = Status.SUCCESS;
var ChaiTypes;
(function (ChaiTypes) {
    ChaiTypes["MASALA"] = "masala";
    ChaiTypes["GINGER"] = "ginger";
})(ChaiTypes || (ChaiTypes = {}));
function makeChai(type) {
    console.log(type.valueOf());
}
makeChai(ChaiTypes.GINGER);
//# sourceMappingURL=arrEnums.js.map