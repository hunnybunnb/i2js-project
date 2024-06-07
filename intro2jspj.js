/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
//products created for array
const products = [
  {name: "Carton of Cherries", price: 4, quantity: 0, productId: 100, image: "./images/cherry.jpg"},
  {name: "Bag of Oranges", price: 10, quantity: 0, productId: 101, image: "./images/orange.jpg"},
  {name: "Carton of Strawberries", price: 5, quantity: 0, productId: 102, image: "./images/strawberry.jpg"}
];
  
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
//empty cart array to hold cart items
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

//adds products to the cart by productId
function getProductById(productId) {
  return products.find(product => product.id === productId);
}

function addProductToCart(productId) {
  const product = getProductById(productId);
    if(!product) {
      console.log("Product with ID ${productId} not found.");
    return;
  }

  //add product to cart and increase product quantity by 1
const cartItem = cart.find(item => item.product.id === productId);
  if(cartItem) {
    cartItem.quantity += 1;
    }  
  
    //increase by 1 if not in cart
  else {
    cart.push({ product, quantity: 1 });
  }
}

  
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
//increases quantity of products in the cart
function increaseQuantity(productId) {
  const cartItem = cart.find(item => item.product.id === productId);
  if(cartItem) {
    cartItem.quantity += 1;
  }
  else {
    console.log("Product with ID ${productID} is not in the cart.");
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
//decreases quantity of products in the cart
function decreaseQuantity(productId) {
  const cartItem = cart.find(item => item.product.id === productId);
    if(cartItem) {
      cartItem.quantity -= 1;

      if(cartItem.quantity === 0) {
        cart = cart.filter(item => item.product.id !== productId);
      }
    }
    else {
      console.log("Product with ID ${productId} is not in the cart.");
    }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
//removes product from cart completely by productId
function removeProductFromCart(productId) {
  const cartItem = cart.find(item => item.product.id !== productId);
  if(cartItem) {
    cartItem.quantity = 0;
    cart = cart.filter(item => item.product.id !== productId);    
  }
    else {
      console.log("Product with ID ${productId} is not in the cart.");
    } 
}

/* Create a function named cartTotal that has no parameters 
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
//sum of products in the cart
function cartTotal() {
  return cart.reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;}, 0);
}

/* Create a function called emptyCart that empties the products from the cart */
//removes all items from the cart
function emptyCart() {
  cart = [];
}


/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
//function to show amount to pay
function pay(amount) {
  const totalCost = cartTotal();
    return amount - totalCost;
  }

//Some information contained was provided by ChatGPT, an AI language model developed by OpenAI. Accessed on 06/06/2024 from chat.openai.com.
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}