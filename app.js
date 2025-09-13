// app.js — ranking com mínimo de jogos

// DOM
const monthSel = document.getElementById('month');
const tbody    = document.querySelector("#table tbody");
const q        = document.getElementById("q");

// ======= CONFIG =======
const MIN_GAMES = 1; // <- mude aqui se quiser outro mínimo

// Preenche o seletor de meses a partir de datasetLabels
monthSel.innerHTML = Object.entries(datasetLabels)
  .map(([key, label]) => `<option value="${key}">${label}</option>`)
  .join("");

// Restaura último mês escolhido ou pega o mais recente
const savedMonth = localStorage.getItem("metralhas:month");
const latestMonth = Object.keys(datasets).sort().pop();
let ui = {
  month: (savedMonth && datasets[savedMonth]) ? savedMonth : latestMonth,
  term: ""
};
monthSel.value = ui.month;

// helpers
const rateBadge = v => `<span class="pill">${v}%</span>`;

// ordenação justa: win rate desc, depois mais jogos, depois nome
const sortFn = (a,b) =>
  (b.rate - a.rate) || (b.games - a.games) || a.name.localeCompare(b.name);

// aplica filtro por mês, termo e mínimo de jogos; reordena e re-ranqueia
function computeList() {
  const base = datasets[ui.month] || [];
  const term = ui.term;
  const filtered = base
    .filter(p => p.games >= MIN_GAMES)
    .filter(p => !term || p.name.toLowerCase().includes(term))
    .sort(sortFn);

  // re-ranqueia + medalhas para o novo top 3
  return filtered.map((p, i) => {
    const rank = i + 1;
    let medal = undefined;
    if (rank === 1) medal = "🥇";
    if (rank === 2) medal = "🥈";
    if (rank === 3) medal = "🥉";
    return {...p, rank, medal};
  });
}

function row(p){
  const medalClass = p.rank===1?'gold':p.rank===2?'silver':p.rank===3?'bronze':'';
  const medal = p.medal ? `<span class="${medalClass}" title="Top ${p.rank}">${p.medal}</span>` : '';
  return `
    <tr>
      <td class="rank">${p.rank.toString().padStart(2,'0')}</td>
      <td class="name">${medal} ${p.name} <span class="state">(${p.state})</span></td>
      <td class="record">${p.rec}</td>
      <td class="rate">
        ${rateBadge(p.rate)}
        <div class="bar" aria-hidden="true"><span style="width:${p.rate}%"></span></div>
      </td>
      <td class="games">${p.games} jogos</td>
    </tr>
  `;
}

function render(){
  const list = computeList();
  tbody.innerHTML = list.map(row).join("");
}

// eventos
monthSel.addEventListener('change', () => {
  ui.month = monthSel.value;
  localStorage.setItem("metralhas:month", ui.month);
  ui.term = ""; q.value = "";
  render();
});

q.addEventListener("input", () => {
  ui.term = q.value.trim().toLowerCase();
  render();
});

// inicial
render();

// Exibe parabéns se o 1º colocado tiver 10 ou mais jogos
function showParabens(data) {
  const top = data.find(p => p.rank === 1);
  if (!top || top.games < 10) return;

  const div = document.getElementById("parabens");
  div.innerHTML = `🏆 Parabéns, <strong>${top.name}</strong>! Você está em <strong>1º lugar</strong> com <strong>${top.games} jogos</strong>!`;
  div.style.display = "block";

  // Efeito de entrada
  div.animate([
    { opacity: 0, transform: "translateY(-20px)" },
    { opacity: 1, transform: "translateY(0)" }
  ], {
    duration: 700,
    fill: "forwards"
  });

  // Desaparece depois de 6 segundos
  setTimeout(() => {
    div.animate([
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(-20px)" }
    ], {
      duration: 600,
      fill: "forwards"
    });
  }, 6000);
}

// Sempre chamar após render
showParabens(computeList());
 // ou showParabens(data_2025_08) dependendo do mês ativo

