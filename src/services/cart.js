export async function addItem(userCart, item) {
  userCart.push(item)
}

export async function deleteItem(userCart, name) {
  
  
}

export async function removeItem(userCart, index) {
  
}

export async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  const resultFormat = result.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
  console.log(`Seu total de compras é: ${resultFormat} \n`);
  return result;
}