/*eslint-disable*/

console.log("hello world");

var viewAllBtn = document.getElementById('viewAllBtn');
var displayPeople = document.getElementById('displayPeople');

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
  var url = "/viewAll";
  request(url, updateDom);
})

function updateDom(result) {
  var allPeople = result.slice(0);
  console.log(allPeople)
  allPeople.forEach(function(people) {
    var peopleDiv = document.createElement("div");
    peopleDiv.classList.add('all-names__people');
    var peopleNameP = document.createElement("p");
    peopleNameP.textContent = "Name: " + people.name
    var peopleCohortNumP = document.createElement("p");
    peopleCohortNumP.textContent = "Cohort Number: " + people.cohort;
    var peopleGitterP = document.createElement("p");
    peopleGitterP.textContent = "Gitter Handle: " + people.gitter_handle;
    var peopleOtherP = document.createElement("p");
    peopleOtherP.textContent = "Talk to me about: " + people.other;
    peopleDiv.appendChild(peopleNameP);
    peopleDiv.appendChild(peopleCohortNumP);
    peopleDiv.appendChild(peopleGitterP);
    peopleDiv.appendChild(peopleOtherP);
    displayPeople.appendChild(peopleDiv);
  })
}
