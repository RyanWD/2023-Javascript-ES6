let username: string = 'Ryan'
console.log(username)

let a: number = 12
let b: string = '6';
let c: number = 2

// console.log(a / b) // causes an error in ts but will compile in js

// username = 43 // ts won't allow as username is declared a string

let myName: string = 'Ryan'
let myNumber: number
let myBoolean: boolean
let myAny: any 
let myUnion: string | number

// e.g union uses
let postId: string | number 
let isActive: string | number 

myUnion = 15
myName = 'Ryan'

const sum = (a:number, b:number) => {
    return a + b
}

let re: RegExp = /\w+/g

// ts infers data type based on current types.
let stringArr = ['one', 'hey', 'Ryan']

let ArrTwo = ['another', 'yep', 5150]

let arrMixed = ['hmm', 1986, true]

stringArr[0] = 'new'
// stringArr.push(15) number won't work in string array

// only works one way as arrTwo allows both string and number
ArrTwo = stringArr
// stringArr = ArrTwo 

let test = []
let bands: string[] = [] // explicit data type of array
bands.push('hello')

// Tuple 
let myTuple: [string, number, boolean] = ['ryan', 36, true]

// Objects 

let myObject: object 
myObject = []

const exampleObject = {
    prop1: 'Ryan',
    prop2: true
}

exampleObject.prop1 = 'Yo'

// object type 

type Fighter = {
    name: string,
    active: boolean,
    fighters: (string | number)[]
}

let egType: Fighter = {
    name: 'Ryan',
    active: false,
    fighters: ['heyy', 22]
}