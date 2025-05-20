const nota = parseFloat(prompt("Digite a nota (0 a 10): "));

if (nota >= 7) {
  alert("Aprovado");
} else if (nota >= 5) {
  alert("Recuperação");
} else {
  alert("Reprovado");
}