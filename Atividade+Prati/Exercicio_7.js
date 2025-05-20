Aqui está seu código Python convertido para JavaScript para rodar no navegador com `prompt` e `alert`:

```javascript
const quantidade = parseInt(prompt("Digite o número de maçãs compradas: "));

let preco;
if (quantidade < 12) {
  preco = 0.30;
} else {
  preco = 0.25;
}

const total = quantidade * preco;

alert(`Total da compra: R$ ${total.toFixed(2)}`);
```

Quer a versão para Node.js?
