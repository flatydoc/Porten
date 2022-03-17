var burgerButton = document.querySelector(".burger__button");
var sidebar = document.querySelector(".sidebar");
var searchButton = document.querySelector(".header__search-button");
var search = document.querySelector(".header__search");
var userLink = document.querySelectorAll(".header__navigation-user");
var modalLogin = document.querySelector(".modal__user");
var modalForm = document.querySelector(".modal__form");
var modalClose = document.querySelector(".modal-close");
var login = modalLogin.querySelector("[name=login]");
var password = modalLogin.querySelector("[name=password]");
var slider = document.querySelector(".slider");
var slide1 = document.querySelector(".slide__1");
var slide2 = document.querySelector(".slide__2");
var slide3 = document.querySelector(".slide__3");
var slide4 = document.querySelector(".slide__4");
var sliderBtn1 = document.querySelector(".checkbox-1");
var sliderBtn2 = document.querySelector(".checkbox-2");
var sliderBtn3 = document.querySelector(".checkbox-3");
var sliderBtn4 = document.querySelector(".checkbox-4");

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

burgerButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  burgerButton.classList.toggle("burger__button-close");
  sidebar.classList.toggle("sidebar-show");
});

search.addEventListener("click", function () {
  searchButton.classList.toggle("header__search-show");
});

var isStorageSupport = true;
var storage = " ";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

userLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.toggle("modal__user-show");
  login.focus();
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal__user-show");
  modalLogin.classList.remove("error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalLogin.classList.contains("modal__user-show")) {
      evt.preventDefault();
      modalLogin.classList.remove("modal__user-show");
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

sliderBtn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide1.classList.toggle("slide__1-show");
  if (modalLogin.classList.contains("modal__user-show")) {
    evt.preventDefault();
    modalLogin.classList.remove("modal__user-show");
    modalLogin.classList.remove("error");
  }
});

sliderBtn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide2.classList.toggle("slide__2-show");
});

sliderBtn3.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide3.classList.toggle("slide__3-show");
});

sliderBtn4.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide4.classList.toggle("slide__4-show");
});
