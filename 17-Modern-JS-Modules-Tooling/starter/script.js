// START SECTION 17
// Importing Module
console.log('Importing Module');
// import { addToCart, totalPrice as tp, totalQuantity } from './shoppingCart.js';
// console.log(totalPrice, totalQuantity);
// addToCart('bread, 5');
// import * as ShoppingCart from './shoppingCart.js';
// console.log(ShoppingCart);
// const addCartItem = ShoppingCart.addToCart;
// addCartItem('doll', 35);
import add from './shoppingCart.js';
// add('game', 25);

// Top-Level Await
// These awaits do not have to be inside an async function!!!
// It blocks the flow
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, body: data.at(-1).body };
// };

// const lastPost = getLastPost();

// lastPost.then(last => console.log(last));

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);
