import readline from 'node:readline';

export async function addItem(userCart, item) {
  userCart.push(item)
}

export async function deleteAllItems(userCart) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const answer = await new Promise((resolve) => {
    rl.question('⚠️  Tem certeza que deseja deletar TODOS os itens do carrinho? (s/n):', resolve);
  });
  rl.close();

  if (answer.trim().toLowerCase() === 's') {
    userCart.length = 0;
    console.log('\n✅ Todos os itens foram removidos do carrinho. \n');
  } else {
    console.log('\n❌ Operação cancelada. O carrinho permanece intacto. \n');
  }
}

export async function removeItem(userCart) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const answer = await new Promise((resolve) => {
    rl.question('Digite o número do item que deseja remover: ', resolve);
  });

  rl.close();
  const index = parseInt(answer);
  const deleteIndex = index - 1;

  if (!isNaN(index) && deleteIndex >= 0 && deleteIndex < userCart.length) {
    const removedItem = userCart.splice(deleteIndex, 1)[0];
    console.log(`\n - Item "${removedItem.name}" removido da lista com sucesso.\n`);
  } else {
    console.log('Índice inválido. Nenhum item removido.');
  }
}

export async function listCart(userCart) {
  console.log("--- 🛒 SHOPEE CART LIST ---- \n");
  userCart.forEach((item, index) => {
    const priceFormatted = item.price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    const subtotalFormatted = item.subtotal().toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    console.log(` 🔸Produto: ${index + 1}. ${item.name} - Valor: ${priceFormatted} | Quant: ${item.quantity} | Subtotal = ${subtotalFormatted}\n`);
  });
}

export async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  const resultFormat = result.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
  console.log(`🛍️  TOTAL DE COMPRAS: ${resultFormat} \n`);
  return result;
}