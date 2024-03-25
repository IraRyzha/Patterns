export class Cart {
    constructor() { 
        if (Cart.instance) {
            throw console.error('Cart is singleton!');
        }
        this.items = [];
        Cart.instance = this;
    }
    addItem(items) {
        this.items = Array.isArray(items) ? [...this.items, ...items] : [...this.items, items];
    }
    removeItem(item) {
        this.items = this.items.filter(it => it !== item);
    }
    showAllItems() {
       console.log(this.items);
    }
}