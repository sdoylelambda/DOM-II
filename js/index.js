// Your code goes here

// DOM Unique Event Listeners

const button = document.getElementsByClassName('btn');
button[0].addEventListener('mouseover', function(eventObject){
 console.log(`btn fired!`);
  TweenMax.to(".btn", 1.5, {width:0, height:0}, {width:100, height:200})
});

// Red on click
const container = document.querySelector('html');
container.addEventListener('click', function(eventObject){
 console.log(`Current Target: ${eventObject.currentTarget}`);
  eventObject.target.style.color = "red";
});

// Black on dblClick
const containerBack = document.querySelector('html');
containerBack.addEventListener('dblclick', function(eventObject){
 console.log(`Current Target: ${eventObject.currentTarget}`);
  eventObject.target.style.color = "black";
});

// Right click turns green
const greenMouse = document.querySelector('html');
greenMouse.addEventListener('contextmenu', function(eventObject){
    console.log(`Hovering Target: ${eventObject.currentTarget}`);
    eventObject.target.style.color = "green";
});

// Blue on copy
const copyBlue = document.querySelector('html');
copyBlue.addEventListener('copy', function(eventObject){
 console.log(`Current Target: ${eventObject.currentTarget}`);
  eventObject.target.style.color = "blue";
});

// Yellow on key presss
const yllow = document.querySelector('html');
yllow.addEventListener('keydown', function(eventObject){
 //console.log(`Event Target: ${eventObject.target}`);
 console.log(`Current Target: ${eventObject.currentTarget}`);
//   eventObject.target.style.color = "green";
  eventObject.currentTarget.style.color = "yellow";
});


// Notifies in console that button was clicked and prevents page re-loading
const formSubmit = document.querySelector('.btn');
formSubmit.addEventListener('click', function(event){
 console.log(`Submit button was clicked!`);
 // This will prevent the form from submitting to action_page.php
  event.preventDefault();
});

const anchorTag = document.querySelector('a');
anchorTag.addEventListener('click', function(event){
 console.log(`Anchor was clicked!`);
 // This will prevent the form from submitting to action_page.php
  event.preventDefault();
});



// 
// const keyTrack = document.querySelector('html');
// keyTrack.addEventListener('contextmenu', function(eventObject){
//     console.log(`Hovering Target: ${eventObject.currentTarget}`);
//     eventObject.target.style.color = "green";
// });


// var button = document.querySelector('btn');
// var html = document.querySelector('html');

// function random(number) {
//   return Math.floor(Math.random() * number);
// }

// button.onclick = function() {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   button.style.backgroundColor = rndCol;
// };

// button.onauxclick = function() {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   button.style.color = rndCol;
// }
