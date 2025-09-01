// DOM
const monthSel = document.getElementById('month');
const tbody = document.querySelector("#table tbody");
const q = document.getElementById("q");

// Preenche o seletor de meses a partir de datasetLabels
monthSel.innerHTML = Object.entries(datasetLabels)
  .map(([key, label]) => `<option value="${key}">${label}</option>`)
  .join("");

// Restaura último mês escolhido
const savedMonth = localStorage.getItem("metralhas:month");
if (savedMonth && datasets[savedMonth]) monthSel.value = savedMonth;

// Estado UI
let ui = { month: monthSel.value, term: "" };

// Helpers de render
const rateBadge = v => `<span class="pill">${v}%</span>`;

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

function getCurrentList(){
  const base = datasets[ui.month] || [];
  if (!ui.term) return base;
  return base.filter(p => p.name.toLowerCase().includes(ui.term));
}

function render(list){
  tbody.innerHTML = list.map(row).join("");
}

// Eventos
monthSel.addEventListener('change', () => {
  ui.month = monthSel.value;
  localStorage.setItem("metralhas:month", ui.month);
  ui.term = ""; q.value = "";
  render(getCurrentList());
});

q.addEventListener("input", () => {
  ui.term = q.value.trim().toLowerCase();
  render(getCurrentList());
});

// Inicial
render(getCurrentList());
