const isempty = (v) => v === "";

const reg = /\w+@\w+\.com/;
const isValidEmail = (emailStr) => reg.test(emailStr);

const inputs = Array.from(document.querySelectorAll(".intro_right form input"));

const clearError = () => {
  inputs.forEach((elem) => elem.parentElement.classList.remove("error"));
};

const button = document.querySelector(".intro_right button");
button.addEventListener("click", (e) => {
  clearError();
  inputs.forEach((elem) => {
    if (
      isempty(elem.value) ||
      (elem.name === "Email Address" && !isValidEmail(elem.value))
    )
      elem.parentElement.classList.add("error");
  });
  e.preventDefault();
});
