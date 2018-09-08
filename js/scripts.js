var feedbackLink = document.querySelector(".button-feedback");
var popup = document.querySelector(".feedback-overlay");
var close = document.querySelector(".modal-feedback-close");
var nameFieldset = popup.querySelector("[name=feedback-name]");
var form = popup.querySelector("form");
var emailFieldset = popup.querySelector("[name=feedback-email]");




feedbackLink.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
nameFieldset.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
})

form.addEventListener("submit", function (evt) {
  if (!nameFieldset.value || !emailFieldset.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести имя и email");
  }
})



window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});


