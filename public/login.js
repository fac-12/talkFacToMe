/*eslint-disable*/

var registerBtn = document.getElementById('register');
var logInBtn = document.getElementById('loginBtn');
var registerModal = document.getElementById('registerModal');
var loginModal = document.getElementById('loginModal');
var registerCloseButton = document.getElementsByClassName("register__close")[0];
var loginCloseButton = document.getElementsByClassName("login__close")[0];
var registerForm = document.getElementById('register_Form');
var displayRegisterPasswordError = document.getElementsByClassName('register__password-error')[0];
var submitRegister = document.getElementsByClassName('register__submitButton')[0];
var displayStrongPasswordError = document.getElementsByClassName('register__password-strongError')[0];
registerBtn.onclick = function() {
  registerModal.style.display = "block";
}

loginBtn.onclick = function() {
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


function checkPasswordMatch() {
  if (registerForm[2].value !== registerForm[3].value) {
    displayRegisterPasswordError.classList.add('showError');
    submitRegister.disabled = true;
  } else {
    displayRegisterPasswordError.classList.remove('showError');
    submitRegister.disabled = false;
  }
}


function strongPassword(){
  var regex = new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$');
  if(!regex.test(registerForm[2].value)){
    displayStrongPasswordError.classList.add('showError');
    submitRegister.disabled = true;
  } else{
    displayStrongPasswordError.classList.remove('showError');
    submitRegister.disabled = false;
  }
}


// Need to figure out how to add username to page after log in

// function request(url, cb) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.status === 200 && xhr.readyState === 4) {
//       var result = JSON.parse(xhr.responseText);
//       cb(result)

//     }
//   }
//   xhr.open("POST", url, true);
//   xhr.send();
// }

// var loginBtn = document.getElementsByClassName('login__formSection__submitButton')[0]

// loginBtn.addEventListener('click', function(){
//   var url = '/login';
//   request(url, loginFunc)
// })

// function loginFunc(){

// }