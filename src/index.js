import {createItem} from "./services/item.js"
import {addItem, calculateTotal, deleteItem, removeItem} from "./services/cart.js"

const cart = [];
const myListFavorite = [];

console.log("Bem-vindo ao seu carrinho de compras da Shopee \n");

const item1 = await createItem("IPhone16", 7000, 1)
const item2 = await createItem("IPhone13", 3000, 2)

await addItem(myListFavorite, item1)
await addItem(cart, item2)
await calculateTotal(cart)




