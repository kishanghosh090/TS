"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "kishan",
    price: 20,
    isHot: true,
};
let tea;
tea = {
    name: "",
    price: 102,
    isHot: "" === "",
};
const adrakChai = {
    name: "alychi",
    price: 25,
    ingredients: ["alychi", "milk", "water", "masala"],
};
let smallCup = { size: 20 };
let bigCup = { size: 223, material: "steel" };
smallCup = bigCup; // not have any issue as it have size inside bigCup
const coffee = { brewTime: 5, beans: "arabica" };
const chaiBrew = coffee;
const u = {
    username: "chaicode",
    password: "123",
};
const updateChai = (updates) => {
    console.log(`updating chai with ${updates.price}`);
};
updateChai({ price: 25 });
updateChai({}); // its problem we can make it empty
//Required -> strictly required although we are using ? inside type declaration we need to give all properties
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Masala Chai",
    quantity: 12,
});
// Pick we can pick keys which we needed like here we pick only name and price
const chaiInfo = {
    name: "",
    price: 90,
};
// remove we can pick keys which we needed like here we remove name and price
const chaiInfo2 = {
    isHot: true,
    ingredients: ["elychi", "milk"],
};
//# sourceMappingURL=objectts.js.map