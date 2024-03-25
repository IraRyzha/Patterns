import { Cart } from "./src/singleton.js";
import { createProduct } from "./src/factory.js";
import { Order } from "./src/state.js";


// Factory and singleton patterns
const cart = new Cart();

const products = [
    createProduct('Phone1', 160, 'Electronics'),
    createProduct('Phone2', 80, 'Electronics'),
    createProduct('Phone3', 250, 'Electronics'),
    createProduct('Phone4', 30, 'Electronics')
]

cart.addItem(products);
cart.showAllItems();


// State pattern
const newOrder = new Order();

// console.log(newOrder)
// newOrder.next()
// newOrder.next()
// newOrder.next()
// newOrder.cancel()
// console.log(newOrder)