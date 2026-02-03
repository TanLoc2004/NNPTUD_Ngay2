
let Product = function (id, name, price, quanlity, category, isVailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quanlity = quanlity;
    this.category = category;
    this.isVailable = isVailable;
    this.getName = function () {
        return this.name;
    }
    this.getPrice = function () {
        return this.price;
    }
}

let arrayProduct = [
    new Product(1, "Iphone 14 Pro Max", 30000000, 10, "Dien Thoai", true),
    new Product(2, "Samsung Galaxy S23 Ultra", 25000000, 15, "Dien Thoai", true),
    new Product(3, "Xiaomi Mi 13 Pro", 20000000, 5, "Dien Thoai", false),
    new Product(4, "Oppo Find X5 Pro", 18000000, 8, "Dien Thoai", true),
    new Product(5, "Vivo X80 Pro", 22000000, 12, "Dien Thoai", false),
    new Product(6, "Dell XPS 13", 35000000, 7, "Laptop", true),
];

let resultProduct = array.map(
    (p) => ({
        name: p.getName(),
        price: p.getPrice()
    })
)








