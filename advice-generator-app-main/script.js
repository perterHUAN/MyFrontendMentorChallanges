const dice = document.querySelector(".dice");

const advice_id = document.querySelector(".advice_id");
const advice_content = document.querySelector(".advice_content");

const advice = {
  117: "It is easy to sit up and take notice, what's difficult is getting  up and \
    take action.",
  118: "Break your action steps into smaller, more manageable tasks.",
  119: "Find ways to stay motivated throughout the process. ",
  120: "Acknowledging and celebrating your progress, no matter how small, can boost your morale and motivate you to keep going.",
};

function randomAdvice() {
  const keys = Object.keys(advice);
  const random_idx = Math.floor(Math.random() * keys.length);
  const id = keys[random_idx];
  return [id, advice[id]];
}
dice.addEventListener("click", (e) => {
  const [id, content] = randomAdvice();
  advice_id.textContent = id;
  advice_content.textContent = content;
});
