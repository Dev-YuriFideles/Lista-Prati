const numero = parseInt(prompt("Digite um número inteiro positivo para calcular o fatorial: "));

if (numero < 0) {
  alert("Não existe fatorial de número negativo.");
} else {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  alert(`O fatorial de ${numero} é: ${fatorial}`);
}
