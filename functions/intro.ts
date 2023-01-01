
const addTwo = (num:number) => {
  return num + 2
}

console.log(addTwo(7))

const getUpper = (val:string) => {
  return val.toUpperCase()
}

const signUpUser = (name:string,email:string,isPaid:boolean) =>{}

signUpUser("Charles","charles@eps.dev",true)

console.log(getUpper('i love you'))

// providing a default value to the function
const loginUser = (name:string,email:string,isPaid:boolean = true) => {}

loginUser('CJ','c@.com')

export {}