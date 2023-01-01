
const User = {
  name:"Charles",
  email:"charles@gmail.com",
  isActive:true
}

const createUser = ({name:string,isActive:boolean}) => {}

const newUser =  {
  name:"Charles",
  email:"charles@gmail.com",
  isActive:true
}

createUser(newUser)

const createCourse = ():{name:string,isPaid:boolean,price:number} => {
  return {name:"NextJs",isPaid:true,price:34}
}

export {}