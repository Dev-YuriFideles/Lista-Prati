const A = parseFloat(prompt("Digite o lado A: "));
const B = parseFloat(prompt("Digite o lado B: "));
const C = parseFloat(prompt("Digite o lado C: "));

if (A < B + C && B < A + C && C < A + B) {
  alert("Forma um triângulo válido.");
  
  if (A === B && B === C) {
    alert("Tipo: Equilátero (todos os lados iguais).");
  } else if (A === B || A === C || B === C) {
    alert("Tipo: Isósceles (dois lados iguais).");
  } else {
    alert("Tipo: Escaleno (todos os lados diferentes).");
  }
} else {
  alert("Não forma um triângulo.");
}
