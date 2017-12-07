/*eslint-disable*/ 

var registerBtn = document.getElementById('register');
var logInBtn = document.getElementById('loginBtn');

var registerModal = document.getElementById('registerModal');
var loginModal = document.getElementById('loginModal');

var registerCloseButton = document.getElementsByClassName("register__close")[0];

var loginCloseButton = document.getElementsByClassName("login__close")[0];

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
