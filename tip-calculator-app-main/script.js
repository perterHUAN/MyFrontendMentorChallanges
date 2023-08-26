const billE = document.querySelector(".bill_set input");
const tipE = document.querySelector(".tip_set .tip_counts");
const customeE = document.querySelector(".tip_set input");
const personE = document.querySelector(".person_set input");

const restE = document.querySelector(".show .reset");

let bill = null;
let tip = null;
let person = null;

const tipAomunt = document.querySelector(".tip_amount .value");
const total = document.querySelector(".total .value");

function showResult() {
  if (bill !== null && tip !== null && person !== null) {
    console.log("bill: %f, tip: %f, person %d", bill, tip, person);
    tipAomunt.textContent = ((bill * tip) / person).toFixed(2);
    total.textContent = ((bill + bill * tip) / person).toFixed(2);
  }
}
function clearBgOnTip() {
  Array.from(document.querySelectorAll("span.tip_count")).forEach(
    (elem) => (elem.style.backgroundColor = "var(--clr-veryDarkCyan)")
  );
}

billE.addEventListener("change", (e) => {
  bill = Number(e.target.value);
  showResult();
});

tipE.addEventListener("change", (e) => {
  clearBgOnTip();
  tip = e.target.value / 100;
  showResult();
});

tipE.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    tip = Number(e.target.textContent.replace("%", "")) / 100;
    clearBgOnTip();
    e.target.style.backgroundColor = "var(--clr-lightGrayishCyan)";
  }
});

personE.addEventListener("change", (e) => {
  const error = document.querySelector(".person_set .title .error");
  if (Number(e.target.value) < 0) {
    error.textContent = "Can't be zero";
    error.classList.add("error");
  } else {
    error.textContent = "";
    person = Number(e.target.value);
    showResult();
  }
});

restE.addEventListener("click", (e) => {
  billE.value = "";
  personE.value = "";
  customeE.value = "";

  clearBgOnTip();

  bill = null;
  person = null;
  tip = null;
});
