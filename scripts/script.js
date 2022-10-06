'use strict';

//select the elements
//it should give us some input from user
//it needs to be updated on the screen
//intermediate elements
const moviesEl = document.querySelector('#movies');
const countEl = document.querySelector('#count');
const totalEl = document.querySelector('#total');
const screenContainerEl = document.querySelector('.screen-container');

//global variables
let moviePrice = moviesEl.value;
let seatCount = 0;

//create necessary functions

//initialize function
//eventListeners
moviesEl.addEventListener('change', function () {
  moviePrice = moviesEl.value;
  countEl.innerText = seatCount;
  totalEl.innerText = seatCount * moviePrice;
});

screenContainerEl.addEventListener('click', function (event) {
  if (event.target.classList.contains('seat')) {
    if (event.target.classList.contains('occupied')) {
    } else {
      event.target.classList.toggle('selected');
      const seatCountArr = document.querySelectorAll('.row .seat.selected');
      seatCount = seatCountArr.length;
      countEl.innerText = seatCount;
      totalEl.innerText = seatCount * moviePrice;
    }
  }
});

//Get and update the MoviePrice
//Update the Seat UI(on seat selection)
//Get the count of number of seats selected by user(update it when user un selected)
//Calculate total amount
// display count and total amount on screen

//Array with all the classes available on that element

//contains - search for the string inside array and return true / false
