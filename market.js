'use strict';

var allImages = []; //declare global

function retrieveData(retrieved) {
  allImages = JSON.parse(retrieved);
}

// fucntion that returns the first letter of the name to upper case
// found on Stack Overflow.
function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// generate table for marketing-results
function generateTable() {
  var retrievedImages = localStorage.getItem('storeImages');
  if (retrievedImages) {  //prevents pushing an empty array into allImages on the initial session
    retrieveData(retrievedImages);
  };
  var tBody = document.getElementById('table-body');

  for (var i = 0; i < allImages.length; i++) {
    var imgRow = document.createElement('tr');
    tBody.appendChild(imgRow);
    var item = document.createElement('td');
    item.textContent = capFirstLetter(allImages[i].name);
    imgRow.appendChild(item);

    var views = document.createElement('td');
    views.textContent = allImages[i].timesShown;
    imgRow.appendChild(views);

    var clicks = document.createElement('td');
    clicks.textContent = allImages[i].timesClicked;
    imgRow.appendChild(clicks);

    var percent = document.createElement('td');
    percent.textContent = parseInt(allImages[i].percentClicked) + '%';
    imgRow.appendChild(percent);

    var recommend = document.createElement('td');
    var checkmark = document.createElement('img');
    if ((allImages[i].percentClicked) >= 40) {
      checkmark.setAttribute('src', 'img/checkmark.png');
    } else {
      checkmark.setAttribute('src', 'img/x-mark.png');
    }
    imgRow.appendChild(recommend);
    recommend.appendChild(checkmark);
  }
}

generateTable();