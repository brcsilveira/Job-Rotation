const dadosFaturamento = require('./dados.json');

function faturamentoDistribuidora(dadosFaturamento) {
  let menor = null;
  let maior = null;
  let soma = 0;
  let diasComFaturamento = 0;
  let diasComFaturamentoAcimaDaMedia = 0;
  let media = 0;
  
  for (let i = 0; i < dadosFaturamento.length; i++) {
        const valor = dadosFaturamento[i].valor;
        if (valor != 0) { // considera apenas os dias com faturamento
            if (menor == null || valor < menor) {
                menor = valor;
            }
            if (maior == null || valor > maior) {
                maior = valor;
            }
            diasComFaturamento++;
            soma = soma + valor;
        }
    }

    media = soma / diasComFaturamento;

    for (let i = 0; i < dadosFaturamento.length; i++) {
        const valor = dadosFaturamento[i].valor;
        if (valor != 0) {
            if (valor > media) {
                diasComFaturamentoAcimaDaMedia++;
            }
        }
    }

    return {
        media: media,
        menor: menor,
        maior: maior,
        diasComFaturamentoAcimaDaMedia: diasComFaturamentoAcimaDaMedia,
    };
}

const resultado = faturamentoDistribuidora(dadosFaturamento);
console.log(`O menor valor de faturamento ocorrido em um dia do mês: ${resultado.menor}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês: ${resultado.maior}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${resultado.diasComFaturamentoAcimaDaMedia}`);