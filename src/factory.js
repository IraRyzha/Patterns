export class Product {
    constructor(name, price, category, isOnSale) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.isOnSale = isOnSale;
    }
}
export function createProduct(name, price, category) {
    let isProductOnSale;
    if (price < 100) {
        isProductOnSale = true;
    } else {
        isProductOnSale = false;
    }
    return new Product(name, price, category, isProductOnSale);
}


