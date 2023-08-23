const score_details = document.querySelector(".score_details");

async function generateElem() {
  const response = await fetch("./data.json");
  if (response.ok) {
    let json = await response.json();

    const info = [];
    json.forEach((d) => {
      info.push(`
        <div class="${d.category} category">
            <span class="name">
                <img src="${d.icon}" alt="${d.category}">
                ${d.category}
            </span>
            <span class="content">
                <span class="score_value">${d.score}</span>
                <span class="other"> / 100</span>
                </span>
        </div>
        
        `);
    });

    score_details.innerHTML = info.join("");
  }
}
generateElem();
