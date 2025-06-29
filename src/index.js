import {createItem} from "./services/item.js"

const cart = [];

console.log("Bem-vindo ao seu carrinho de compras da Shopee");

const item1 = await createItem("IPhone16", 5.000, 1)
const item2 = await createItem("IPhone13", 3.000, 2)

console.log(`O subtotal de itens deu: R$ ${item2.subtotal().toFixed(3)},00`);

