"use strict";
let username = 'Ryan';
console.log(username);
let a = 12;
let b = '6';
let c = 2;
// console.log(a / b) // causes an error in ts but will compile in js
// username = 43 // ts won't allow as username is declared a string
let myName = 'Ryan';
let myNumber;
let myBoolean;
let myAny;
let myUnion;
// e.g union uses
let postId;
let isActive;
myUnion = 15;
myName = 'Ryan';
const sum = (a, b) => {
    return a + b;
};
let re = /\w+/g;
// ts infers data type based on current types.
let stringArr = ['one', 'hey', 'Ryan'];
let ArrTwo = ['another', 'yep', 5150];
let arrMixed = ['hmm', 1986, true];
stringArr[0] = 'new';
// stringArr.push(15) number won't work in string array
// only works one way as arrTwo allows both string and number
ArrTwo = stringArr;
// stringArr = ArrTwo 
let test = [];
let bands = []; // explicit data type of array
bands.push('hello');
// Tuple 
let myTuple = ['ryan', 36, true];
// Objects 
let myObject;
myObject = [];
const exampleObject = {
    prop1: 'Ryan',
    prop2: true
};
exampleObject.prop1 = 'Yo';
let egType = {
    name: 'Ryan',
    active: false,
    fighters: ['heyy', 22]
};
