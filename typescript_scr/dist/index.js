"use strict";
// class User {
//   public email:string
//   private name:string
//   private readonly city: string = 'Limbe'
//   constructor(email:string,name:string){
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Limbe";
    }
    deleteToken() {
        console.log('Token deleted');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count must be greater than 1');
        }
        this._courseCount = courseNum;
    }
}
const charles = new User("charles@tabot.com", "charles");
console.log(charles);
