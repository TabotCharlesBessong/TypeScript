
// precising what a function should return 
const addTwo = (num:number): number => {
  return num + 2
  // return "hello"
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

// how to return more than one type 
// const getValue = (myVal:number) => {
//   if(myVal > 5) return true
//   return "200 OK"
// }

const heros = ["Superman","Aquaman","Flash","Batman"]
// const heros = [1,2,3,4]

heros.map((hero):string =>  {
  return `my hero is ${hero}`
})

const consoleError = (errMsg:string):void => {
  console.log(errMsg)
}

const handleError = (errMsg:string):never => {
  throw new Error(errMsg)
}

export {}