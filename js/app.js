/*
Kevin Couture
Lab2
Jun. 4th, 2019
app.js

The goal of lab 2 is to create 5 yes/no questions with a response
for yes and for no. Each response is logged into the console.
*/

'use strict';

// Below are 5 questions with response for yes and for no.

var anybody = prompt('Is anybody out there?');
console.log('anyone?: ' + anybody);
anybody = anybody.toUpperCase(); // Convert to all upper case.
if(anybody === 'YES' || anybody === 'Y'){
  alert('Good, good. I was worried I was talking to myself.')
}
else if(anybody === 'NO' || anybody === 'N') {
  alert('Well I guess I\'m still going to ask the next questions...');
}
else {
  alert('Invalid input!');
}

var bus = prompt('Do you take the bus for your commute');
console.log('bus ride?: ' + bus);
bus = bus.toUpperCase(); // Convert to all upper case.
if(bus === 'YES' || bus === 'Y'){
  alert('Nice, I also ride the bus from Maple Valley. It only takes me a hour and a half to get down here. It\'s great!... /s');
}
else if(bus === 'NO' || bus === 'N') {
  alert('Yea it kinda of is not so fun');
}
else {
  alert('Invalid input!');
}

var car = prompt('Do you have a car?');
console.log('car?: ' + car);
car = car.toUpperCase(); // Convert to all upper case.
if( (car === 'YES' || car === 'Y') && (bus === 'Y' && bus === 'YES')) {
  alert('Yea I wouldn\'t want to drive to Seattle either... In fact I don\'t want to do that.');
}
if(car === 'YES' || car === 'Y'){
  alert('Nice, I bet it gets you from A to B huh?');
}
else if(car === 'NO' || car === 'N') {
  alert('Well at least the bus is an option. Walking is never too bad either.');
}
else {
  alert('Invalid input!');
}

var cat = prompt('Do you have at least 1 cat?');
console.log('cat?: ' + cat);
cat = cat.toUpperCase(); // Convert to all upper case.
if(cat === 'YES' || cat === 'Y'){
  alert('Sweet! I have 4 cats right now.');
}
else if(cat === 'NO' || cat === 'N') {
  alert('Wack, you should have a cat.');
}
else {
  alert('Invalid input!');
}

var stoked = prompt('Are you stoked for this year?');
console.log('stoked?: ' + stoked);
stoked = stoked.toUpperCase(); // Convert to all upper case.
if(stoked === 'YES' || stoked === 'Y'){
  alert('Cool, I know I am. A whole lot of cool stuff starting for me.');
}
else if(stoked === 'NO' || stoked === 'N') {
  alert('Dang it is almost half over, better do something to spice it up.');
}
else {
  alert('Invalid input!');
}