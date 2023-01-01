
// array of strings representing
const superHeros: string[] = []

// array of number representation 
// const heroPower: number[] = []
const heroPower: Array<number> = []

superHeros.push("Batman")
heroPower.push(2)

// creating an object to use as reference
type User = {
  name:string
  isActive:boolean
}

// an array of object declaration 
const allUsers: User[] = []

allUsers.push({
  name: "Batman",
  isActive: true
})

// multidimensional declaration 
const multidimensionalArray: number[][] = [
  [255,255,255],
  [125,0,255]
]

multidimensionalArray.push([0,0,0])

console.log('====================================');
console.log({superHeros,heroPower,allUsers,multidimensionalArray});
console.log('====================================');

export {}