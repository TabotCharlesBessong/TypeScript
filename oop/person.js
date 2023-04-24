var Person = /** @class */ (function () {
    function Person() {
        this.name = ''; //default
        this.age = 0; // default
    }
    Person.prototype.greetings = function () {
        return this.name + ' ' + this.age;
    };
    return Person;
}());
var Motor = /** @class */ (function () {
    function Motor() {
        this.make = '';
        this.model = '';
        this.color = '';
    }
    return Motor;
}());
var person1 = new Person();
person1.name = 'Kevin De Bruyner';
person1.age = 38;
console.log(person1.greetings());
