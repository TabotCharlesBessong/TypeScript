
// const user:(string | number)[] = ['cj',20]

// alternative way of adding many types to your array is to use tuples
// but like this we cant reverse the order of the array 
let tUser:[string,number,boolean]

tUser = ['cj',20,true]

let rgb: [number,number,number] = [255,123,45]
let rgba: [number,number,number,number] = [255,123,45,0.5]

type User = [number,string] 
const newUser: User = [2022,'me@cameroon.cm']
newUser.push(true)

export {}