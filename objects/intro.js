"use strict";
exports.__esModule = true;
var User = {
    name: "Charles",
    email: "charles@gmail.com",
    isActive: true
};
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isActive;
};
var newUser = {
    name: "Charles",
    email: "charles@gmail.com",
    isActive: true
};
createUser(newUser);
var createCourse = function () {
    return { name: "NextJs", isPaid: true, price: 34 };
};
