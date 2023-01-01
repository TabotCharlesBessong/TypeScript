
// const User = {
//   name:"Charles",
//   email:"charles@gmail.com",
//   isActive:true
// }

// const createUser = ({name:string,isActive:boolean}) => {}

// const newUser =  {
//   name:"Charles",
//   email:"charles@gmail.com",
//   isActive:true
// }

// createUser(newUser)

// const createCourse = ():{name:string,isPaid:boolean,price:number} => {
//   return {name:"NextJs",isPaid:true,price:34}
// }

// type User = {
//   name:string
//   email:string
//   isActive:boolean
// }

// const createUser = (user:User) => {}

// createUser({name:"",email:"",isActive:false})

type User = {
  readonly _id:string
  name:string
  email:string
  isActive:boolean
  creditCardNumber?:number  // optional 
}

const myUser:User = {
  _id:"12345",
  name:"c",
  email:"c@gmail.com",
  isActive:false
}

myUser.email = "charles@gmail.com"
// myUser._id ="23424"

console.log(myUser)

type cardNumber = {
  cardNumber:string
}

type cardDate = {
  cardDate:string
}

type cardDetails = cardNumber & cardDate & {
  cvv:number
}

export {}