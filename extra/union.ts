
// union is an alternative of any and it comprises of many types
let score: number = 33
let love: number | string  = 33

type User = {
  name: string,
  age: number
}

type Admin = {
  username: string,
  age: number
}

let charles: User | Admin = {name: 'John', age:34}

console.log(charles)

const getDbId = (id:number | string ) => {
  if (typeof id === 'number') {
    return id * 2
  } else {
    return id.toUpperCase()
  }
  console.log(`The database id is ${id}`)
}

// union with arrays 
const data: number[] | string[] = [1,2,3,4,5,6,7,8,9,10,11,12]
const donne: (number | string | boolean)[] = [1,2,"3",4,false,"6",7,8,"9",10,11,12,true]

// console.log(getDbId())
getDbId(3)
getDbId("4")
getDbId("3")
getDbId(4)
export {}