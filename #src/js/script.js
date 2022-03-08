var burgerButton = document.querySelector(".header__burger-button");
var sidebar = document.querySelector(".sidebar");
var searchButton = document.querySelector(".header__search-button");
var search = document.querySelector(".header__search");
var userLink = document.querySelector(".header__navigation-user");
var modalLogin = document.querySelector(".modal__user");
var modalForm = document.querySelector(".modal__form");
var modalClose = document.querySelector(".modal-close");
var login = modalLogin.querySelector("[name=login]");
var password = modalLogin.querySelector("[name=password]");

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
  burgerButton.classList.toggle("header__burger-close");
  sidebar.classList.toggle("sidebar-show");
});

search.addEventListener("click", function () {
  searchButton.classList.add("header__search-show");
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
  modalLogin.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalLogin.classList.contains("modal__user-show")) {
      evt.preventDefault();
      modalLogin.classList.remove("modal__user-show");
      modalLogin.classList.remove("modal-error");
    }
  }
});

modalForm.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    modalLogin.classList.remove("modal-error");
    modalLogin.offsetWidth = modalLogin.offsetWidth;
    modalLogin.classList.add("modal-error");
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});
