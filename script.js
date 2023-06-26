'use strict';

//Intro to DOM and how to select an Element
console.log(document.querySelector('.message').textContent); // pass in the class/ID
//.querySelector is a method that is available on the document object
//ID using #, class using .

//DOM definition and DOM Manipulation

// DOM: Document object model: structed representation of HTML documents allows JavaScript to access HTML elements and styles to manipulate them (change text, HTML attributes, and even CSS styles)
//The DOM tree structure
//1. Start with the DOCUMENT object. Entry point of the DOM. Ex: document.querySelector(). We need it to start selecting elements
//Keep going deeper into the nested HTML structure, we keep adding more and more children to the DOM tree

//DOM !== JavaScript
//DOM (methods and properties) is a part of WEB APIs (Application Programming Interface) which can interact with JavaScript

//Selecting and Manipulating Elements
// document.querySelector('.message').textContent = 'Correct Number!'; // Change text or whatever u want
// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number!')
// );

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value; //Empty value
// document.querySelector('.guess').value = 23; //Show 23 in the console
// console.log(document.querySelector('.guess').value);

//Handling Click Event (take note of this first before the Game Logic)
//What happen after u click the button?

//Implementing the Game Logic
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// Math.random() always goes around 0 and 1, but 1 is never reached
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  document.querySelector('.message').textContent = 'Correct Number';

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number');
  }
  //When Player Winns
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Answer';
    displayMessage('Correct Answer');
    document.querySelector('.number').textContent = secretNumber;
    //Make notes here
    document.querySelector('body').style.backgroundColor = '#60b347'; //change background color

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      Number((document.querySelector('.highscore').textContent = highScore));
    }
  }
  //when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //When it is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //When it is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  //anything in the bracket of if/else statement will become a boolean value

  //element.addEventListner('Name of event (Basically you name it', specify reaction of the event (event handler))
});

//Challenge
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //I thought it would randomly place a new number after pressing again, but no it's still the same number from the last trial. So, we need the random number formula here
  const guess = Number((document.querySelector('.guess').value = ''));
  console.log(guess, typeof guess);
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222'; //change background color

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});

//Refactoring our code: the DRY Principle
