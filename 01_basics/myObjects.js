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
    //   console.log(user.email);
}
// createUser({name: "kishan", isActive: true, email: "kishan@gmail.com"});
createUser(User);
function createCourse() {
    return {
        name: "React",
        isPaid: true,
        price: 100,
    };
}
var course = createCourse();
function createUser2(user) {
    console.log(user);
    console.log(user.name);
    console.log(user.email);
}
var myUser = {
    _id: "abc123",
    name: "kishan",
    email: "kishan@gmail.com",
    isActive: true,
};
