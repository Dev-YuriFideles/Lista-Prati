const numero = parseInt(prompt("Digite um número para ver a tabuada: "));

let resultadoTexto = `\nTabuada do ${numero}:\n`;

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  resultadoTexto += `${numero} x ${i} = ${resultado}\n`;
}

alert(resultadoTexto);
