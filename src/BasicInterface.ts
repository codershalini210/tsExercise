interface Product {
id: number;
name: string;
price: number;
inStock: boolean;
}
const laptop :Product = {
    id:101,
    name:"Laptop HP",
    price:1200,
    inStock:true
}
const AC:Product={
    id:102,
    name : "AC LG",
    price:1400,
    inStock:false
}
function displayProduct(product : Product):void{
    console.log(`productId : ${product.id} ProductName: ${product.name}`)
    console.log(`price: $${product.price}`)
    console.log(`Availability : ${product.inStock ? "In Stock " : "Out of Stock"} `)
}
displayProduct(laptop)
console.log("---------------------------------")
displayProduct(AC)
