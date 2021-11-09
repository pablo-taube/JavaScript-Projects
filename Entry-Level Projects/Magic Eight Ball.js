// Project idea by CodeCademy. This programs aims to reproduce a  magic 8-Ball, wich is used for fortune-telling or seeking advice.

// The following variable is used to save the user name.
let userName = '';

// The following ternary expression is used to greet the user with or without his name.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// The following variable is used to save the user question.
let userQuestion = '';

// The next line is used to display the user question.
console.log(`Your questions: ${userQuestion}`);

// The following variable is used to generate a randon number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);

// The following expression is used to associate a number to the phrase.
randomNumber === 1 ? console.log('It is certain') : randomNumber === 2 ? console.log('It is decidedly so') : randomNumber === 3 ? console.log('Reply hazy try again') : randomNumber === 4 ? console.log('Cannot predict now') : randomNumber === 5 ? console.log('Do not count on it') : randomNumber === 6 ? console.log('My sources say no') : randomNumber === 7 ? console.log('Outlook not so good') : console.log('Signs point to yes');

