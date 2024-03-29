const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('Wolfsqage');

// Help with 'map'
carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

console.log(carMakers)

// Flexible types
const importantDates: (Date | string | number)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(27)

console.log(importantDates)