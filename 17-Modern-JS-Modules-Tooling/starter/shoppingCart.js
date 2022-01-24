// Exporting Module
console.log('Exporting Module');
// Blocking Code
// console.log('Start Fetching Users');
// await fetch('https://jsonplaceholder.typicode.com/posts'); // This is blocking not only this module but the module importing it
// console.log('Finish Fetching Users');
// const shippingCost = 10;
// const cart = [];

// export const addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to the cart`);
// };

// const totalPrice = 237;
// const totalQuantity = 23;

// export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}
