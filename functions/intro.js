"use strict";
exports.__esModule = true;
// precising what a function should return 
var addTwo = function (num) {
    return num + 2;
    // return "hello"
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
// how to return more than one type 
// const getValue = (myVal:number) => {
//   if(myVal > 5) return true
//   return "200 OK"
// }
var heros = ["Superman", "Aquaman", "Flash", "Batman"];
// const heros = [1,2,3,4]
heros.map(function (hero) {
    return "my hero is ".concat(hero);
});
var consoleError = function (errMsg) {
    console.log(errMsg);
};
var handleError = function (errMsg) {
    throw new Error(errMsg);
};
