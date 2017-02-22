'use strict';

//create array of all filepaths
var filepathArray = [
  'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg',
  'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg',
  'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
  'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg',
  'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg',
];
var allImages = [];
var previousRandArray = [];
var allNames = [];
var allClicks = [];
var turns = 0;

// event listeners per table cell
var tdOne = document.getElementById('image-one');
tdOne.addEventListener('click', clickHandler);

var tdTwo = document.getElementById('image-two');
tdTwo.addEventListener('click', clickHandler);

var tdThree = document.getElementById('image-three');
tdThree.addEventListener('click', clickHandler);

// event handler: generate three images to table
function clickHandler(event) {
  if (turns < 25) {
    //event.preventDefault();
    // clear table contents
    turns++;
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
    clickPercentage();
    generateData();
  } else {
    createChart();
    alert('You have guessed 25 times.');
    // pushing data to local storage
    storeData();
    retrieveData();
  }
}

// create constructor for image objects
function BusImg(path, i) {
  this.name = path.split('.')[0];
  this.filepath = 'img/' + path;
  this.imgNum = i;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.percentClicked = 0;
};

// create objects for all 19 images: refactored
function createAllImages() {
  for (var i = 0; i < filepathArray.length; i++) {
    allImages.push(new BusImg(filepathArray[i], i));
  }
};

// pull array of strings for myChart
function generateData() {
  //clear table data
  allNames = [];
  allClicks = [];
  for (var i = 0; i < allImages.length; i++) {
    allNames.push(allImages[i].name);
    allClicks.push(allImages[i].timesClicked);
  }
}

// write random generate function, pulling imgNum id per objects (Amy helped me with this)
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
// calculates percentage clicked for every image object
function clickPercentage() {
  for (var i = 0; i < allImages.length; i++) {
    var clickPercent = (allImages[i].timesClicked / allImages[i].timesShown) * 100;
    allImages[i].percentClicked = clickPercent;
  }
}

// Both functions below store and retrieve data to the local storage
function storeData() {
  var storeImagesJSON = JSON.stringify(allImages);
  localStorage.setItem('storeImages', storeImagesJSON);
}

function retrieveData() {
  var retrievedImages = localStorage.getItem('storeImages');
  allImages = JSON.parse(retrievedImages);
  console.log(allImages);
}
// run all functions initially
createAllImages();
generateData();
generateRandom();

// Chart.js
function createChart() {
  var ctx = document.getElementById('my-chart');
  var myChart = new Chart(ctx, {  //eslint-disable-line
    type: 'bar',
    data: {
      labels: allNames,
      datasets: [{
        label: '# of Votes',
        data: allClicks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
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
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
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
            beginAtZero: true,
            stepSize: 1
          }
        }]
      }
    }
  });
}