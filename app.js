'use strict';

var allImages = [];

// event listener
var wasClicked = document.getElementById('shop');
var tdOne = document.getElementById('image-one');
var tdTwo = document.getElementById('image-two');
var tdThree = document.getElementById('image-three');
wasClicked.addEventListener('click', clickHandler);

// event handler: generate three images to table
function clickHandler(event) {
  event.preventDefault();
  // generateRandom();

  var imgOne = document.createElement('img');
  imgOne.setAttribute('src', 'img/bag.jpg');
  tdOne.appendChild(imgOne);

  var imgTwo = document.createElement('img');
  imgTwo.setAttribute('src', 'img/banana.jpg');
  tdTwo.appendChild(imgTwo);

  var imgThree = document.createElement('img');
  imgThree.setAttribute('src', 'img/bathroom.jpg');
  tdThree.appendChild(imgThree);
}

// create constructor for image objects
function BusMallImg(name, filepath, imgNum) {
  this.name = name;
  this.filepath = filepath;
  this.imgNum = imgNum;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.percentClicked = 0;
};


// create objects for all 19 images
var bag = new BusMallImg('Bag', 'img/bag.jpg', 1);
allImages.push(bag);

var banana = new BusMallImg('Banana', 'img/banana.jpg', 2);
allImages.push(banana);

var bathroom = new BusMallImg('Bathroom', 'img/bathroom.jpg', 3);
allImages.push(bathroom);

var boots = new BusMallImg('Boots', 'img/boots.jpg', 4);
allImages.push(boots);

var breakfast = new BusMallImg('Breakfast', 'img/breakfast.jpg', 5);
allImages.push(breakfast);

var bubblegum = new BusMallImg('Bubble Gum', 'img/bubblegum.jpg', 6);
allImages.push(bubblegum);

var chair = new BusMallImg('Chair', 'img/chair.jpg', 7);
allImages.push(chair);

var cthulhu = new BusMallImg('Cthulhu', 'img/cthulhu.jpg', 8);
allImages.push(cthulhu);

var dogDuck = new BusMallImg('Dog-Duck', 'img/dog-duck.jpg', 9);
allImages.push(dogDuck);

var dragon = new BusMallImg('Dragon', 'img/dragon.jpg', 10);
allImages.push(dragon);

var pen = new BusMallImg('Pen', 'img/pen.jpg', 11);
allImages.push(pen);

var petSweep = new BusMallImg('Pet Sweep', 'img/pet-sweep.jpg', 12);
allImages.push(petSweep);

var scissors = new BusMallImg('Scissors', 'img/scissors.jpg', 13);
allImages.push(scissors);

var shark = new BusMallImg('Shark', 'img/shark.jpg', 14);
allImages.push(shark);

var tauntaun = new BusMallImg('Tauntaun', 'img/tauntaun.jpg', 15);
allImages.push(tauntaun);

var unicorn = new BusMallImg('Unicorn', 'img/unicorn.jpg', 16);
allImages.push(unicorn);

var usb = new BusMallImg('USB', 'img/usb.jpg', 17);
allImages.push(usb);

var waterCan = new BusMallImg('Water Can', 'img/water-can.jpg', 18);
allImages.push(waterCan);

var wineGlass = new BusMallImg('Wine Glass', 'img/wine-glass.jpg', 19);
allImages.push(wineGlass);

// // write random generate function, pulling imgNum id per objects
// function generateRandom() {

//   // generate three random numbers
//   var rand1 = Math.floor(Math.random() * (19 - 1 + 1) + 1);
//   var rand2 = Math.floor(Math.random() * (19 - 1 + 1) + 1);
//   var rand3 = Math.floor(Math.random() * (19 - 1 + 1) + 1);

//   // pull the three images with the same imgNum ids as the random numbers
//   // run for loop for allImages.length
//   // run if/else for allImages.imgNum
//   for (var i = 0; i < allImages.length; i++) {
//     if (rand1 === this.imgNum) {
//       var imgOne = document.createElement('img');
//       imgOne.setAttribute('src', this.filepath);
//       tdOne.appendChild(imgOne);
//     }
//   }
// }