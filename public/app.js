/*eslint-disable*/

console.log("hello world");

var viewAllBtn = document.getElementById('viewAllBtn');
var viewAll = document.getElementById('viewAll');
var displayPeople = document.getElementById('displayPeople');
var aboutSection = document.getElementById('about');
var joinDatabaseBtn = document.getElementById('joindatabase');
var allNames = document.getElementsByClassName("all-names")[0];
var allNamesBtn = document.getElementsByClassName("all-names__btns")[0];
var facBtn = document.getElementById('facBtn');
var freelanceBtn = document.getElementById('freelanceBtn');
var internBtn = document.getElementById('internBtn');
var juniorBtn = document.getElementById('juniorBtn');
var mentorBtn = document.getElementById('mentorBtn')
var viewAllInList = document.getElementById('viewAll');
var homeBtn = document.getElementById('homeBtn');

function request(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
      var result = JSON.parse(xhr.responseText);
      cb(result)

    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}

viewAllBtn.addEventListener("click", function() {
  aboutSection.style.display = 'none';
  allNames.style.display = 'block';
  //  clearElement(category);
  // if(category.style.display = 'block'){
  //   category.style.display = 'none';
  // displayPeople.style.display = 'block';
  // // }
  var url = "/viewAll";
  request(url, updateDom);
})

homeBtn.addEventListener("click", function() {
  aboutSection.style.display = "block";
  allNames.style.display = "none";
})

viewAllInList.addEventListener("click", function() {
  var url = "/viewAll";
  request(url, updateDom);
})

facBtn.addEventListener("click", function() {
  var url = "/fac";
  request(url, updateDom);
})

freelanceBtn.addEventListener("click", function() {
  var url = "/freelance";
  request(url, updateDom);
})

internBtn.addEventListener("click", function() {
  var url = "/internship";
  request(url, updateDom);
})

juniorBtn.addEventListener("click", function() {
  var url = "/juniordev";
  request(url, updateDom);
})

mentorBtn.addEventListener("click", function() {
  var url = "/mentor";
  request(url, updateDom);
})

function clearElement(element) {
  while (element.childElementCount !== 0) {
    element.removeChild(element.lastChild);
  }
}

function updateDom(result) {
  clearElement(displayPeople)
  var allPeople = result.slice(0);
  allPeople.forEach(function(people) {
    var peopleDiv = document.createElement("div");
    peopleDiv.classList.add('all-names__people');
    var peopleNameP = document.createElement("p");
    peopleNameP.textContent = "Name: " + people.name
    var peopleCohortNumP = document.createElement("p");
    peopleCohortNumP.textContent = "Cohort Number: " + people.cohort;
    var peopleGitterP = document.createElement("p");
    peopleGitterP.textContent = "Gitter Handle: " + people.gitter_handle;
    var peopleCategoryP = document.createElement("p");
    peopleCategoryP.textContent = "Talk to me about: " + people.string_agg;
    var peopleOtherP = document.createElement("p");
    peopleOtherP.textContent = "Additional info on: " + people.other;
    peopleDiv.appendChild(peopleNameP);
    peopleDiv.appendChild(peopleCohortNumP);
    peopleDiv.appendChild(peopleGitterP);
    peopleDiv.appendChild(peopleCategoryP);
    peopleDiv.appendChild(peopleOtherP);
    displayPeople.appendChild(peopleDiv);
  })
  // var username = document.createElement('p');
  // username.textContent= decoded.username;
  // displayPeople.appendChild(username);
}

var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
joinDatabaseBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

