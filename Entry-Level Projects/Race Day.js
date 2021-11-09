/* "Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this:registration-timeline

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration)." 

----- by CodeCademic -----

*/

// This line generate the runner number
let raceNumber = Math.floor(Math.random() * 1000);

// This variable says if the runner registered early or not.
let registeredEarly = false;

// This variable save the runner age.
let runnerAge = 10;

// Tthe following ternary expression is used to differentiate youth numbers from adult numbers.
registeredEarly && runnerAge >= 18 ? raceNumber += 1000 : raceNumber =  raceNumber;

// Ternary expression used to tell the runner when he will run.
registeredEarly && runnerAge >= 18 ? console.log(`Runner ${raceNumber}! You will race at 09:30 am.`) : runnerAge >= 18 ? console.log(`Late adults run at 11:00 am.`) : runnerAge < 18 ? console.log(`Runner ${raceNumber}, youth registrants run at 12:30 pm (regardless of registration)`) : console.log('Please, visit  the registration desk.');

