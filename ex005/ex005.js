let stringNormal = 'Oi, meu nome é Bruno Chim Silveira.'
let stringInvertida = []

for (let i = stringNormal.length - 1; i >= 0; i--)
    stringInvertida += stringNormal[i];

console.log(`String invertida: ${stringInvertida}`)