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

/*
 That's a second way we can reach the same result:

//The following variable is used to store the phrase associated with the number.
let eightBall = '';

//
randomNumber === 1 ? eightBall = ('It is certain') : randomNumber === 2 ? eightBall = ('It is decidedly so') : randomNumber === 3 ? eightBall = ('Reply hazy try again') : randomNumber === 4 ? eightBall = ('Cannot predict now') : randomNumber === 5 ? eightBall = ('Do not count on it') : randomNumber === 6 ? eightBall = ('My sources say no') : randomNumber === 7 ? eightBall = ('Outlook not so good') :  eightBall = ('Signs point to yes');

console.log(`And the answer is: ${eightBall}`);

*/

/*
That's a third way we can reach the same result:

//The following variable is used to store the phrase associated with the number.
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;  
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
 }
console.log(`And the answer is: ${eightBall}`);
*/