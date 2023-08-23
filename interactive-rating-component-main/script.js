const rate_scores = Array.from(
  document.querySelectorAll(".rating_score_choose span")
);

let rateScoreNum = null;

function clearChooseClass() {
  rate_scores.forEach((e) => e.classList.remove("choose"));
}

rate_scores.forEach((elem, idx) => {
  elem.addEventListener("click", (e) => {
    clearChooseClass();
    elem.classList.add("choose");
    rateScoreNum = idx + 1;
  });
});

const subButton = document.querySelector(".interactive_rating .submit");
const interactive_rating = document.querySelector(".interactive_rating");
const thankyou = document.querySelector(".thankyou");
const scoreToFill = document.querySelector(".thankyou .rating_score");

subButton.addEventListener("click", (e) => {
  interactive_rating.style.display = "none";
  thankyou.style.display = "block";
  scoreToFill.textContent = rateScoreNum;
});
