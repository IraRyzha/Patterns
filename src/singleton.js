export class Cart {
    constructor() {
        if (Cart.instance) {
            throw console.error('Cart is singleton!');
        }
        this.items = [];
        Cart.instance = this;
    }
    addItem(items) {
        if (Array.isArray(items)) {
            items.forEach(item => {
                this.items.push(item);
            })
        } else {
            this.items.push(items);
        }
    }
    removeItem(item) {
        this.items = this.items.filter(it => it !== item);
    }
    showAllItems() {
        // if (!Cart.instance) {
        //     throw console.error('Cart has not been created!');
        // }
       console.log(this.items);
    }
}