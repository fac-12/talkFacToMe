console.log("hello world");

var viewAllBtn = document.getElementById('viewAllBtn');

function request(url, cb){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState === 4){
      var result = JSON.parse(xhr.responseText);
      cb(result)

    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}

viewAllBtn.addEventListener("click", function(){
  var url = "/viewAll";
  request(url, updateDom);
})

function updateDom(result){
  console.log(result)
}
