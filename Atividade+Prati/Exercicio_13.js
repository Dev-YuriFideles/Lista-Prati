let soma = 0;
let contador = 0;

while (true) {
  const entrada = prompt("Digite um número decimal (0 para encerrar):");
  const numero = parseFloat(entrada);

  if (numero === 0) {
    break;
  }

  soma += numero;
  contador++;
}

if (contador > 0) {
  const media = soma / contador;
  alert(`Média aritmética dos ${contador} números: ${media.toFixed(2)}`);
} else {
  alert("Nenhum número foi digitado.");
}
