@@include("jquery.min.js")
@@include("slick.min.js")

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

var burgerButton = document.querySelector(".burger__button");
var sidebar = document.querySelector(".sidebar");

burgerButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  burgerButton.classList.toggle("burger__button-close");
  sidebar.classList.toggle("sidebar-show");
});

var searchButton = document.querySelector(".header__search-button");
var search = document.querySelector(".header__search");

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

var userLink = document.querySelectorAll(".user__button");
var modalLogin = document.querySelector(".modal__user");
var modalForm = document.querySelector(".modal__form");
var modalClose = document.querySelector(".modal-close");
var login = modalLogin.querySelector("[name=login]");
var password = modalLogin.querySelector("[name=password]");

userLink.forEach(function (entry) {
  entry.addEventListener("click", function (evt) {
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

$('.slider').slick({
  arrows:true,
  dots:true,
  slidesToShow:1,
  autoplay:true,
  speed:1000,
  autoplaySpeed:800,
  responsive:[
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow:1
      }
    }
  ]
});
