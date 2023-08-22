var carMakers = ['ford', 'toyota', 'chevy'];
var dates = [new Date(), new Date()];
var carsByMake = [];
// Help with inference when extracting values
var car = carMakers[0];
var myCar = carMakers.pop();
// Prevent incompatible values
carMakers.push('Wolfsqage');
// Help with 'map'
carMakers.map(function (car) {
    return car.toUpperCase();
});
console.log(carMakers);
// Flexible types
var importantDates = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(27);
console.log(importantDates);
