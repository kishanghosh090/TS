"use strict";
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;
// if (seat == AISLE) {
// }
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "AISLE";
    SeatChoice["MIDDLE"] = "MIDDLE";
    SeatChoice["WINDOW"] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 0] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
console.log(hcSeat);
