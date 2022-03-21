@@include("_jquery.min.js")
@@include("_slick.min.js")

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

let burgerButton = document.querySelector(".burger__button");
let sidebar = document.querySelector(".sidebar");

burgerButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  burgerButton.classList.toggle("burger__button-close");
  sidebar.classList.toggle("sidebar-show");
});

let searchInput = document.querySelector(".header__search-input");
let searchButton = document.querySelector(".header__search-button");

searchButton.addEventListener("click", function (evt) {
  if (searchInput.value == "") {
    evt.preventDefault();
    searchInput.classList.toggle("header__search-show")
  }
});


let isStorageSupport = true;
let storage = " ";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

let signIn = document.querySelectorAll(".user__button");
let modalLogin = document.querySelector(".modal__login");
let modalForm = document.querySelector(".modal__form");
let modalClose = document.querySelector(".modal-close");
let login = modalLogin.querySelector("[name=login]");
let password = modalLogin.querySelector("[name=password]");


signIn.forEach(function (entry) {
  entry.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLogin.classList.toggle("modal__login-show");
    login.focus();
    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });
});


modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal__login-show");
  modalLogin.classList.remove("error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalLogin.classList.contains("modal__login-show")) {
      evt.preventDefault();
      modalLogin.classList.remove("modal__login-show");
      modalLogin.classList.remove("error");
    }
  }
});

modalForm.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    modalLogin.classList.remove("error");
    modalLogin.offsetWidth = modalLogin.offsetWidth;
    modalLogin.classList.add("error");
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

$('.slider').slick({
  dots:true,
  slidesToShow:1,
  autoplay:true,
  speed:1000,
  autoplaySpeed:1300,
});

let passwordLock = document.querySelector(".password__button");
let passwordInput = document.querySelector(".password-input");

passwordLock.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordLock.classList.add("password__button-show");
  }
  else {
    passwordInput.type = "password"
    passwordLock.classList.remove("password__button-show");
  }
});
