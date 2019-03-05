// Your code goes here

// const workBtn = document.getElementsByClassName('btn');
// workBtn.addEventListener('mouseover', function(eventObject){
//  console.log(`btn fired!`);
//   TweenMax.to("#btn", 3, {x:100, y:100, scale:2, skewX:45, rotation:180});
// });


// Red on click
const container = document.querySelector('html');
container.addEventListener('click', function(eventObject){
 //console.log(`Event Target: ${eventObject.target}`);
 console.log(`Current Target: ${eventObject.currentTarget}`);
  eventObject.target.style.color = "red";
  //eventObject.currentTarget.style.color = "red";
});

// Black on dblClick
const containerBack = document.querySelector('html');
containerBack.addEventListener('dblclick', function(eventObject){
 //console.log(`Event Target: ${eventObject.target}`);
 console.log(`Current Target: ${eventObject.currentTarget}`);
  eventObject.target.style.color = "black";
  //eventObject.currentTarget.style.color = "red";
});

// Right click turns green
const greenMouse = document.querySelector('html');
greenMouse.addEventListener('contextmenu', function(eventObject){
    console.log(`Hovering Target: ${eventObject.currentTarget}`);
    eventObject.target.style.color = "green";
});

// 
// const keyTrack = document.querySelector('html');
// keyTrack.addEventListener('contextmenu', function(eventObject){
//     console.log(`Hovering Target: ${eventObject.currentTarget}`);
//     eventObject.target.style.color = "green";
// });
