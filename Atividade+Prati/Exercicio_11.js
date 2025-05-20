let soma = 0;

for (let i = 1; i <= 5; i++) {
  const numero = parseFloat(prompt(`Digite o ${i}º número:`));
  soma += numero;
}

alert(`A soma total dos números é: ${soma}`);
