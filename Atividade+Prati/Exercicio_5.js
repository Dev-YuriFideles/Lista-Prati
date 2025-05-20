const peso = parseFloat(prompt("Digite seu peso em kg: "));
const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75): "));

const imc = peso / (altura ** 2);

alert(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
  alert("Categoria: Baixo peso");
} else if (imc < 25) {
  alert("Categoria: Peso normal");
} else if (imc < 30) {
  alert("Categoria: Sobrepeso");
} else {
  alert("Categoria: Obesidade");
}
