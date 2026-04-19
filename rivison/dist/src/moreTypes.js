let response = "42";
// forcefull type assertation
let numeric = response.length;
let bookString = `{"name" : "who moved my cheese"}`;
let bookObject = JSON.parse(bookString);
console.log(bookObject?.name);
const inputElement = document.getElementById("username");
let value;
value = "chai";
value = 1212;
value = {};
value.toUpperCase();
let myVal;
myVal = "chai";
myVal = 1212;
myVal = {};
// myVal.toUpperCase();//'myVal' is of type 'unknown'.ts(18046)
if (typeof myVal == "string") {
    myVal.toLocaleUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
const data = "chai aur code";
const strData = data;
function redirsctBasedOnRole(role) {
    if (role == "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }
    if (role == "user") {
        console.log("Redirecting to user dashboard");
        return;
    }
}
export {};
//# sourceMappingURL=moreTypes.js.map