const faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };
  
const faturamentoTotal = Object.keys(faturamento).reduce((total, estado) => total + faturamento[estado], 0);

const percentuais = {};
for (let estado in faturamento) {
percentuais[estado] = ((faturamento[estado] / faturamentoTotal) * 100).toFixed(2);
}

for (let estado in percentuais) {
console.log(`${estado}: ${percentuais[estado]}%`);
}