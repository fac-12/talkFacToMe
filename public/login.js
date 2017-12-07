/*eslint-disable*/

var registerBtn = document.getElementById('register');
var logInBtn = document.getElementById('loginBtn');

var registerModal = document.getElementById('registerModal');
var loginModal = document.getElementById('loginModal');

var registerCloseButton = document.getElementsByClassName("register__close")[0];

var loginCloseButton = document.getElementsByClassName("login__close")[0];

registerBtn.onclick = function(){
  registerModal.style.display = "block";
}

loginBtn.onclick = function(){
  loginModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
registerCloseButton.onclick = function() {
    registerModal.style.display = "none";
}

loginCloseButton.onclick = function() {
    loginModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === registerModal) {
      registerModal.style.display = "none";
    } else if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}
