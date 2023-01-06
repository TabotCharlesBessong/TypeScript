
interface User {
  readonly dbId:number
  email:string,
  userId:number,
  googleId?:string,
  // startTrial: () => string
  startTrial(): string,
  // The parameter does not have to match the argument
  getCoupon(couponName:string,value:number):number
}

interface User {
  githubToken: string
}

// inheritance 
interface Admin extends User {
  role:'admin' | 'ta' | 'learner'
}

const charles: Admin = {dbId:22,email:'charles@gmail.com',userId:1,role:'admin',githubToken:'github',googleId:'Hello',startTrial:() => {
  return "just getting started"
},
getCoupon:(name:'Charles',off:12) => {
  return 10
}
}

export {}