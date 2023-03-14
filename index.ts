// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// Master Array
var mainObj = {
  obj: [
    { n1: 'ISRO', a1: 35, r1: 'Scientist' },
    { n2: 'NDHY', a2: 28, r2: 'Teacher' },
    { n3: 'MABT', a3: 49, r3: 'Manager' },
    { n4: 'NICS', a4: 37, r4: 'Leader' },
    { n5: 'LOPE', a5: 72, r5: 'Boss' },
  ],
};
let arr1 = [];
let newArr1 = [];
let newArr = [];

// 1.
// Parsing an JSON object’s Values:
// Write a function called “printAllValues” which returns an newArray of all the object’s values.
//[‘n1’, ‘a1’, ‘r1’, ‘n2’, ‘a2’, ‘r2’]
mainObj.obj.forEach((obj1) => {
  for (let item in obj1) {
    newArr.push(item);
    // console.log(newArr);
  }
});

// 2.
// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
// [[‘n1’, 'val1’], [‘a1’, ‘val1’], [‘r1’, ‘val1’]]
let arr2 = [];
mainObj.obj.forEach((obj) => {
  for (let item in obj) {
    arr2.push(item); //key
    arr2.push(obj[item]); //value
    // console.log(arr2);
  }
});
console.log(arr2);

//3.
//Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
//1) the first element of the array as the object’s key, and
//2) the last element of the array as that key’s value.
//Input (Array):
//var array = [“GUVI”, “I”, “am”, “Geek”];
//Output:
//var object = {
//GUVI : “Geek”
//}
let arr3 = ['nane1', 'ISRO', 'age1', 35];
let obj3 = { [arr1[0]]: arr1[arr1.length - 1] };
console.log(obj3);

// Notes
// let newVal = "customKey"
// let obj3 = {[newVal]:''};

// 4.
//Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
//Input (Array):
//var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
//Output:
//var object = {
//make : “Ford”
//model : “Mustang”,
//year : 1964
//}
var array = [
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', 1964],
];

let arr = [];

array.forEach((item) => {
  let obj = { [item[0]]: item[1] };
  arr.push(obj);
});
console.log(arr);
console.log(JSON.stringify(arr));

// 5.
//Parsing a list of lists and convert into a JSON object:
//Write a function called “transformGeekData” that transforms some set of data from one format to another.
//Input (Array):
//var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
//Output:
//[
//{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
//{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
//]
var array5 = [
  [
    ['firstName', 'Vasanth'],
    ['lastName', 'Raja'],
    ['age', 24],
    ['role', 'JSWizard'],
  ],
  [
    ['firstName', 'Sri'],
    ['lastName', 'Devi'],
    ['age', 28],
    ['role', 'Coder'],
  ],
];

// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]

let finalArr = [];
let tempArr = [];
let obj = {};
array5.forEach((item) => {
  tempArr = [];
  item.forEach((item1) => {
    obj = { [item1[0]]: item1[1] };
    tempArr.push(obj);
  });
  finalArr.push(tempArr);
});
console.log(JSON.stringify(finalArr));

// 6.
//Two objects are equal or not
//Input:

var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 };
console.log(JSON.stringify(expected) == JSON.stringify(actual));

// 7.
//match question and answers

var securityQuestions = [
  {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter',
  },
  {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985',
  },
  {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC',
  },
];
//Solution=1-ofrLoop->ifelse
function abc() {
  for (let i = 0; i < securityQuestions.length; i++) {
    if (
      securityQuestions[i].question ==
        'What was the model year of your first car?' &&
      securityQuestions[i].expectedAnswer == '1985'
    ) {
      console.log('true');
      console.log('condition matched');
      break;
    }
  }
}

abc();

//8.
//Write a function to return the list of characters below 20 age
var students = [
  { name: 'Siddharth Abhimanyu', age: 21 },
  { name: 'Malar', age: 25 },
  { name: 'Maari', age: 18 },
  { name: 'Bhallala Deva', age: 17 },
  { name: 'Baahubali', age: 16 },
  { name: 'AAK chandran', age: 23 },
  { name: 'Gabbar Singh', age: 33 },
  { name: 'Mogambo', age: 53 },
  { name: 'Munnabhai', age: 40 },
  { name: 'Sher Khan', age: 20 },
  { name: 'Chulbul Pandey', age: 19 },
  { name: 'Anthony', age: 28 },
  { name: 'Devdas', age: 56 },
];

students.forEach((item) => {
  if (item.age > 20) {
    newArr.push(item);
  }
});

console.log(JSON.stringify(newArr));

//New Page => https://codeburst.io/javascript-interview-questions-arrays-f7a418d670f5
//1.
//Question
//What is the output of the following code?

const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
console.log(arrayOfOddNumbers.length);
