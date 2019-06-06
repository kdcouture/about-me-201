/*
Kevin Couture
Lab2
Created: Jun. 4th, 2019
app.js

The goal of lab 2 is to create 5 yes/no questions with a response
for yes and for no. Each response is logged into the console.
*/

// Because you told me to.
'use strict';

// Get the users name.
var uname = prompt('Please enter your name.');

// A variable to store the number of correct guesses.
var correctAns = 0;

// A variable to hold the number of guesses used.
var guesses = 0;

// Create a random number for number guessing question.
var rNum = Math.floor(Math.random()*10);
console.log('The random number is... ' + rNum);

// Correct responses stored in array, two arrays are used to account for two possible answers.
var correctArray = ['Y','Y','N','N','Y'];
var correctArray2 = ['YES','YES','NO','NO','YES'];
console.log('Correct answers are... ' + correctArray);
console.log('Other accepted answers are... ' + correctArray2);

// This array stores the correct responses for multiple answer question.
var mAns = ['TEMPY', 'MEOWZERS', 'ANGLE CLOUD', 'MEOWDELHIME'];
console.log('The multiple possible answers are... ' + mAns);

//
// Below are two parralel arrays that are used to decrease amount of code required.
//
// Questions stored in array for condesing the code.
var qArray = ['Is anybody out there?', 'Do I take the bus for my commute?', 'Do I not have a car?', 'Do I have more than 5 cats?', 'Am I stoked for this year?'];
// Alert Responses stored here. 2(n) is the response for correct, 2(n)+1 is the response for incorrect.
var rArray = ['Good, good. I was worried I was talking to myself.', 'Well I guess I\'m still going to ask the next questions...', 'It\'s great!... /s', 'Well I do and yea it kinda of is not so fun', 'Well I can see why you think that on acount of the bus and all.', 'Nice, it gets me from A to B.', 'Wack, I only have 4 cats and it is too many...', 'You got it!', 'Cool, a whole lot of cool stuff starting for me.', 'Geez I know I\'m monotone but I am stoked about it since work started.'];

//
// Below is a loop that will ask 5 questions with response for yes and for no.
//
for(var i = 0; i < 5; i++){
  var resp = prompt(qArray[i] + '\nAnswers must be either yes or no (y/n)');
  console.log(qArray[i] + ' ' + resp);
  resp = resp.toUpperCase(); // Convert to all upper case.
  if(resp === correctArray[i] || resp === correctArray2[i]){
    alert(rArray[2*i]);
    correctAns++;
  }
  else {
    alert(rArray[2*i+1]);
  }
}
//
// Ask a question with 4 chances.
//
guesses = 4;
// Variable declartion for storge of users guess.
var numGuess;
while(guesses > 0) {
  numGuess = prompt('Guess what number I am thinking between 1 and 10.');
  console.log('Number guessed by user: ' + numGuess + ' The random number is: ' + rNum);
  if(rNum < numGuess) {
    alert('Try a smaller number.');
  }
  else if(rNum > numGuess) {
    alert('Try a larger number.');
  }
  else if(rNum === numGuess) {
    alert('Wow you got it!');
    correctAns++;
    console.log('They guessed the number correctly.');
    break;
  }
  guesses--;
}

//
// Ask a question with 6 chances to get one correct answer.
//
guesses = 5;
// Storage for users guess.
var catName;
// Correct answer flag.
var isNameFlag = false;
do{
  catName = prompt('Can you guess one of my (four) cat\'s name?').toUpperCase(); // Is stored in upper casing.
  // Compair against each name.
  for(var idx = 0; idx < mAns.length; idx++) {
    console.log('Name Guessed is: ' + catName);
    // If correct, break out of loop using flag.
    if(catName === mAns[idx]) {
      alert('Nice, you got one!');
      correctAns++;
      isNameFlag = true; // Raise flag
      break;
    }
  }
  // Name not correct.
  if(!isNameFlag){
    alert('Nope! You have ' + guesses + ' remaining.');
  }
  // Name was correct, break out of loop.
  else {
    console.log('They got one right!');
    alert('The correct options were... ' + mAns);
    break;
  }
  // Decrement guess count.
  guesses--;
} while (guesses >= 0);

console.log(correctAns + ' correct answers.');
alert('Wow! ' + uname +' you got ' + correctAns + ' correct answers! out of 7 possible');
