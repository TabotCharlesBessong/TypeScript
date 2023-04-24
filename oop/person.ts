
class Person {
  name:string = '' //default
  age:number = 0 // default

  greetings(){
    return this.name + ' ' + this.age
  }
}

class Motor {
  make: string = ''
  model: string = ''
  color: string = ''
}

const person1: any = new Person()
person1.name = 'Kevin De Bruyner'
person1.age = 38
console.log(person1.greetings())