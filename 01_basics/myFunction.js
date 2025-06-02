"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    console.log("Name: ", name);
    console.log("Email: ", email);
}
signUpUser("John", "6dPnM@example.com", true);
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("Email: ", email);
    console.log("Password: ", password);
};
loginUser("6dPnM@example.com", "password");
// console.log(getUpper("hello")); // HELLO
// console.log(addTwo(2)); // 4
function getValue(myVal) {
    if (myVal > 10) {
        return true;
    }
    else {
        return "";
    }
}
var getHello = function (s) {
    return "Hello ".concat(s);
};
var heros = ["Superman", "Batman", "Spiderman"];
// const heros = [1, 2, 3, 4];
var heroStrings = heros.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(heroStrings);
function consoleError(errmsg) {
    console.log(errmsg);
    // return `Error: ${errmsg}`;
}
function handleError(errmsg) {
    console.log(errmsg);
    throw "Error: ".concat(errmsg);
}
