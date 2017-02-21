'use strict';

var allImages = [];
var previousRandArray = [];

// event listeners per table cell
var tdOne = document.getElementById('image-one');
tdOne.addEventListener('click', clickHandler);

var tdTwo = document.getElementById('image-two');
tdTwo.addEventListener('click', clickHandler);

var tdThree = document.getElementById('image-three');
tdThree.addEventListener('click', clickHandler);

// event handler: generate three images to table
function clickHandler(event) {
  event.preventDefault();
  // clear table contents
  tdOne.textContent = '';
  tdTwo.textContent = '';
  tdThree.textContent = '';

  // generate new photos
  var clickedImage = event.target.getAttribute('src');
  console.log('Just Clicked:', clickedImage);
  generateRandom();
  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i].filepath == clickedImage) {
      allImages[i].timesClicked++;
      console.log('Times Clicked: ', allImages[i].timesClicked);
    }
  }
};

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
// can I make a loop for this?
var bag = new BusMallImg('Bag', 'img/bag.jpg', 0);
allImages.push(bag);

var banana = new BusMallImg('Banana', 'img/banana.jpg', 1);
allImages.push(banana);

var bathroom = new BusMallImg('Bathroom', 'img/bathroom.jpg', 2);
allImages.push(bathroom);

var boots = new BusMallImg('Boots', 'img/boots.jpg', 3);
allImages.push(boots);

var breakfast = new BusMallImg('Breakfast', 'img/breakfast.jpg', 4);
allImages.push(breakfast);

var bubblegum = new BusMallImg('Bubble Gum', 'img/bubblegum.jpg', 5);
allImages.push(bubblegum);

var chair = new BusMallImg('Chair', 'img/chair.jpg', 6);
allImages.push(chair);

var cthulhu = new BusMallImg('Cthulhu', 'img/cthulhu.jpg', 7);
allImages.push(cthulhu);

var dogDuck = new BusMallImg('Dog-Duck', 'img/dog-duck.jpg', 8);
allImages.push(dogDuck);

var dragon = new BusMallImg('Dragon', 'img/dragon.jpg', 9);
allImages.push(dragon);

var pen = new BusMallImg('Pen', 'img/pen.jpg', 10);
allImages.push(pen);

var petSweep = new BusMallImg('Pet Sweep', 'img/pet-sweep.jpg', 11);
allImages.push(petSweep);

var scissors = new BusMallImg('Scissors', 'img/scissors.jpg', 12);
allImages.push(scissors);

var shark = new BusMallImg('Shark', 'img/shark.jpg', 13);
allImages.push(shark);

var sweep = new BusMallImg('Sweep', 'img/sweep.png', 14);
allImages.push(sweep);

var tauntaun = new BusMallImg('Tauntaun', 'img/tauntaun.jpg', 15);
allImages.push(tauntaun);

var unicorn = new BusMallImg('Unicorn', 'img/unicorn.jpg', 16);
allImages.push(unicorn);

var usb = new BusMallImg('USB', 'img/usb.gif', 17);
allImages.push(usb);

var waterCan = new BusMallImg('Water Can', 'img/water-can.jpg', 18);
allImages.push(waterCan);

var wineGlass = new BusMallImg('Wine Glass', 'img/wine-glass.jpg', 19);
allImages.push(wineGlass);

// write random generate function, pulling imgNum id per objects
// Amy helped me with this
function generateRandom() {

  // generate three random numbers
  var imgNumArray = [];
  for (var i = 0; i < allImages.length; i++) {
    if (i !== previousRandArray[0] && i !== previousRandArray[1] && i !== previousRandArray[2]) {
      imgNumArray.push(i);
    }
  }

  var randArray = [];
  for (i = 0; i < 3; i++) {
    var randIndex = Math.random() * imgNumArray.length;
    var rand = imgNumArray.splice(randIndex, 1)[0];    // splice returns an array, hence [0]
    randArray.push(rand);
  }
  previousRandArray = randArray;

  // print three images at random
  for (i = 0; i < allImages.length; i++) {
    if (randArray[0] == allImages[i].imgNum) {
      tdOne.setAttribute('src', allImages[i].filepath);
      allImages[i].timesShown++;
      console.log('Time Shown: ', allImages[i].timesShown);
    };
    if (randArray[1] == allImages[i].imgNum) {
      tdTwo.setAttribute('src', allImages[i].filepath);
      allImages[i].timesShown++;
      console.log('Time Shown: ', allImages[i].timesShown);
    };
    if (randArray[2] == allImages[i].imgNum) {
      tdThree.setAttribute('src', allImages[i].filepath);
      allImages[i].timesShown++;
      console.log('Time Shown: ', allImages[i].timesShown);
    }
  }
};

// run generate random initially
generateRandom();

// Chart.js
function createChart() {
  var ctx = document.getElementById('my-chart');
  var myChart = new Chart(ctx, {  //eslint-disable-line
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

createChart();