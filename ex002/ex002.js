function verificaFibonacci(numero) {
    let primeiro = 0;
    let segundo = 1;
    let proximo = primeiro + segundo;
  
    while (proximo <= numero) {
      if (proximo === numero) {
        return numero + " pertence à sequência de Fibonacci.";
      }
  
      primeiro = segundo;
      segundo = proximo;
      proximo = primeiro + segundo;
    }
  
    return numero + " não pertence à sequência de Fibonacci.";
}
  
console.log(verificaFibonacci(5)); 
console.log(verificaFibonacci(8)); 
console.log(verificaFibonacci(10));  