var feedbackLink = document.querySelector(".button-feedback");
var popup = document.querySelector(".modal-login-container");
var close = document.querySelector(".modal-feedback-close");
var nameFieldset = popup.querySelector("[id=feedback-name]");
var form = popup.querySelector("modal-feedback");
var emailFieldset = popup.querySelector("[id=feedback-email]");




feedbackLink.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
nameFieldset.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
})
close.addEventListener("keydown", function (evt) {
  evt.keyCode === 27 && (evt.preventDefault(),
  popup.classList.contains("modal-show") && (popup.classList.remove("modal-show")))
});


