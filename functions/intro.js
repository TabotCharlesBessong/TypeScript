"use strict";
exports.__esModule = true;
var addTwo = function (num) {
    return num + 2;
};
console.log(addTwo(7));
var getUpper = function (val) {
    return val.toUpperCase();
};
var signUpUser = function (name, email, isPaid) { };
signUpUser("Charles", "charles@eps.dev", true);
console.log(getUpper('i love you'));
// providing a default value to the function
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser('CJ', 'c@.com');
