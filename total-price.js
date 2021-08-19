const products = [
    { name: 'laptop', price:43000},
    { name: 't-shirt', price: 800},
    { name: 'phone', price:55000},
    { name: 'watch', price:3600}
];

let totalPrice = 0;
 for(const product of products){
     totalPrice = totalPrice + product.price;
 }
//  console.log(totalPrice);


const shoppingCart = [
    { name: 'laptop', price:43000 , quantity: 1},
    { name: 't-shirt', price: 800 , quantity: 8},
    { name: 'phone', price:55000  , quantity: 3},
    { name: 'watch', price:3600   , quantity: 1}
];

let cartTotal = 0;
// let productQuantity = 1;
 for(const product of shoppingCart){
    // let productQuantity = 1;
    const productQuantity = product.price*product.quantity;
    cartTotal = cartTotal + productQuantity;
 }
 console.log(cartTotal);