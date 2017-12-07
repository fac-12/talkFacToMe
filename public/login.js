var registerBtn = document.getElementById('register');
var logInBtn = document.getElementById('loginBtn');

var modal = document.getElementById('myModal');
var modalLogin = document.getElementById('myModalLogIn');

var span = document.getElementsByClassName("register__formSection__close")[0];


registerBtn.onclick = function(){
  modalLogin.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalLogin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target ===modalLogin) {
        modalLogin.style.display = "none";
    }
}
