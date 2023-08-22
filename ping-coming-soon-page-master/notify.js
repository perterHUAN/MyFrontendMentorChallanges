const notifyButton = document.querySelector(".notify button");

const emailInput = document.querySelector(".notify input");
const result = document.querySelector(".notify > span");
const info = document.querySelector(".notify span span");
notifyButton.addEventListener("click", (e) => {
  const emailContent = emailInput.value;
  const reg = /\w+@\w+\.com/;
  if (reg.test(emailContent)) {
    result.classList.add("sucessful");
    info.textContent = "Successful!";
  } else {
    result.classList.add("fail");
    info.textContent = "Please provide a valid email address!";
  }
});
