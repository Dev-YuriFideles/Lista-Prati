const valor1 = parseFloat(prompt("Digite o primeiro valor: "));
const valor2 = parseFloat(prompt("Digite o segundo valor (diferente do primeiro): "));

if (valor1 === valor2) {
  alert("Os valores são iguais! Por favor, digite valores diferentes.");
} else {
  if (valor1 < valor2) {
    alert(`Ordem crescente: ${valor1}, ${valor2}`);
  } else {
    alert(`Ordem crescente: ${valor2}, ${valor1}`);
  }
}
