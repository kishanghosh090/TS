"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "kishan",
    email: "kishan@gmail.com",
    isActive: true,
};
function createUser(user) {
    console.log(user);
    console.log(user.name);
    console.log(user.email);
}
// createUser(User);
function createCourse() {
    return {
        name: "React",
        isPaid: true,
        price: 100,
    };
}
var course = createCourse();
console.log(course);
