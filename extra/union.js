"use strict";
exports.__esModule = true;
// union is an alternative of any and it comprises of many types
var score = 33;
var love = 33;
var charles = { name: 'John', age: 34 };
console.log(charles);
var getDbId = function (id) {
    console.log("The database id is ".concat(id));
};
// console.log(getDbId())
getDbId(3);
getDbId("4");
getDbId("3");
getDbId(4);
