import { Cart } from "./singleton.js";
import { createProduct } from "./factory.js";



const cart = new Cart();

const products = [
    createProduct('Phone1', 160, 'Electronics'),
    createProduct('Phone2', 80, 'Electronics'),
    createProduct('Phone3', 250, 'Electronics'),
    createProduct('Phone4', 30, 'Electronics')
]

cart.addItem(products);

cart.showAllItems();