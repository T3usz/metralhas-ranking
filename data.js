/* Datasets de cada mês (histórico) */

// Agosto 2025 — dados dos seus prints
const data_2025_08 = [
  {rank:1,  name:"Rafael",      state:"PE", rec:"1V • 0E • 0D",  rate:100, games:1,  medal:"🥇"},
  {rank:2,  name:"KG",          state:"PE", rec:"10V • 2E • 0D", rate:83,  games:12, medal:"🥈"},
  {rank:3,  name:"MALVADEZA",   state:"PE", rec:"14V • 1E • 5D", rate:70,  games:20, medal:"🥉"},
  {rank:4,  name:"DL7",         state:"BA", rec:"15V • 2E • 7D", rate:63,  games:24},
  {rank:5,  name:"Everton086",  state:"PI", rec:"25V • 9E • 8D", rate:60,  games:42},
  {rank:6,  name:"Vitin",       state:"PI", rec:"9V • 2E • 4D",  rate:60,  games:15},
  {rank:7,  name:"SM7_PRO",     state:"MA", rec:"7V • 0E • 5D",  rate:58,  games:12},
  {rank:8,  name:"Pulgar",      state:"MA", rec:"7V • 1E • 4D",  rate:58,  games:12},
  {rank:9,  name:"Euzebio",     state:"BA", rec:"15V • 4E • 8D", rate:56,  games:27},
  {rank:10, name:"Lukas Pit",   state:"MG", rec:"17V • 7E • 8D", rate:53,  games:32},
  {rank:11, name:"DAVX",        state:"BA", rec:"8V • 3E • 4D",  rate:53,  games:15},
  {rank:12, name:"vt7",         state:"RN", rec:"17V • 10E • 6D",rate:50,  games:34},
  {rank:13, name:"PZR10",       state:"BA", rec:"3V • 0E • 3D",  rate:50,  games:6},
  {rank:14, name:"EdgarWXZ",    state:"AL", rec:"3V • 3E • 1D",  rate:43,  games:7},
  {rank:15, name:"CEGUIN",      state:"RN", rec:"6V • 6E • 3D",  rate:40,  games:15},
  {rank:16, name:"PAULINO7",    state:"PE", rec:"4V • 3E • 3D",  rate:40,  games:10},
  {rank:17, name:"GBdazarea",   state:"CE", rec:"1V • 1E • 1D",  rate:33,  games:3},
  {rank:18, name:"Biel7",       state:"MG", rec:"2V • 0E • 5D",  rate:29,  games:7},
  {rank:19, name:"Italo Dugrau",state:"PI", rec:"2V • 1E • 7D",  rate:20,  games:10},
  {rank:20, name:"Liderança",   state:"PI", rec:"2V • 4E • 4D",  rate:18,  games:11},
  {rank:21, name:"CF10",        state:"PI", rec:"1V • 0E • 5D",  rate:17,  games:6},
  {rank:22, name:"LeoniM10",    state:"MA", rec:"1V • 1E • 4D",  rate:17,  games:6},
  {rank:23, name:"Lima",        state:"GO", rec:"1V • 3E • 4D",  rate:13,  games:8},
  {rank:24, name:"BK3",         state:"PA", rec:"0V • 0E • 1D",  rate:0,   games:1},
];

// Setembro 2025 — atualizado pelos últimos prints
const data_2025_09 = [
  {rank:1,  name:"Pulgar",      state:"MA", rec:"7V • 0E • 0D",  rate:100, games:7,  medal:"🥇"},
  {rank:2,  name:"Euzebio",     state:"BA", rec:"2V • 0E • 0D",  rate:100, games:2,  medal:"🥈"},
  {rank:3,  name:"Rafael",      state:"PE", rec:"1V • 0E • 0D",  rate:100, games:1,  medal:"🥉"},
  {rank:4,  name:"EdgarWXZ",    state:"AL", rec:"4V • 0E • 1D",  rate:80,  games:5},
  {rank:5,  name:"CEGUIN",      state:"RN", rec:"4V • 0E • 1D",  rate:80,  games:5},
  {rank:6,  name:"DL7",         state:"BA", rec:"15V • 2E • 4D", rate:71,  games:21},
  {rank:7,  name:"SM7_PRO",     state:"MA", rec:"2V • 0E • 1D",  rate:67,  games:3},
  {rank:8,  name:"Lukas Pit",   state:"MG", rec:"11V • 5E • 2D", rate:61,  games:18},
  {rank:9,  name:"ALISSON7SHOW",state:"PE", rec:"3V • 1E • 1D",  rate:60,  games:5},
  {rank:10, name:"MALVADEZA",   state:"PE", rec:"8V • 3E • 5D",  rate:50,  games:16},
  {rank:11, name:"vt7",         state:"RN", rec:"7V • 3E • 4D",  rate:50,  games:14},
  {rank:12, name:"Italo Dugrau",state:"PI", rec:"3V • 2E • 1D",  rate:50,  games:6},
  {rank:13, name:"Lima",        state:"GO", rec:"2V • 0E • 2D",  rate:50,  games:4},
  {rank:14, name:"KG",          state:"PE", rec:"4V • 0E • 5D",  rate:44,  games:9},
  {rank:15, name:"Everton086",  state:"PI", rec:"10V • 6E • 9D", rate:38,  games:26},
  {rank:16, name:"Vitin",       state:"PI", rec:"4V • 1E • 6D",  rate:36,  games:11},
  {rank:17, name:"viny",        state:"AC", rec:"1V • 0E • 2D",  rate:33,  games:3},
  {rank:18, name:"DAVX",        state:"BA", rec:"1V • 1E • 5D",  rate:13,  games:8},
  {rank:19, name:"LeoniM10",    state:"MA", rec:"0V • 0E • 2D",  rate:0,   games:2},
];



// Mapa de datasets
const datasets = {
  "2025-08": data_2025_08,
  "2025-09": data_2025_09,
};

// Para popular o <select> no HTML
const datasetLabels = {
  "2025-08": "Agosto/2025",
  "2025-09": "Setembro/2025",
};
