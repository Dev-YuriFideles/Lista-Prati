while (true) {
  const opcao = parseInt(prompt(
    "\n=== MENU DA LANCHONETE ===\n" +
    "1 - Ver Cardápio 🍔\n" +
    "2 - Fazer Pedido 🧾\n" +
    "3 - Sair 🚪\n" +
    "Escolha uma opção (1, 2 ou 3): "
  ));

  switch (opcao) {
    case 1:
      alert(
        "🍽️ CARDÁPIO:\n" +
        "1. X-Burguer - R$15,00\n" +
        "2. Pizza de Calabresa - R$30,00\n" +
        "3. Refrigerante - R$6,00"
      );
      break;
    case 2:
      const pedido = prompt("Digite o nome do item que deseja pedir:");
      alert(`Pedido recebido: ${pedido}! Obrigado pela preferência. 🧡`);
      break;
    case 3:
      alert("Fechando o caixa... Volte sempre! 🧑‍🍳");
      // Sai do loop
      break;
    default:
      alert("Opção inválida. Escolha 1, 2 ou 3.");
  }

  if (opcao === 3) {
    break;
  }
}

            