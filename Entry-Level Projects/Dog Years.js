// Project idea by CodeCademy. This programs aims to convert a dog's age to human's age.

// The following variable keep an human age.
const myAge = 25;

// The following variables is used to differentiate the first years from the following ones.
let earlyYears = 2;
earlyYears = earlyYears * 10.5; 

// This variable represents when the dog is older than 2 years.
let laterYears = myAge - 2;

// Every dog's years after the 2 first is equal to 4 human's years. That variable represent this.
laterYears *= 4;

myAgeInDogYears = earlyYears + laterYears;

//Method used to lower case the string and save it to the variable
myName = 'Bob'.toLowerCase();

// String interpolation to display all variables.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);