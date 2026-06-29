const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price;   // Bug: cartItems[i] is undefined on the last iteration  Sol: removed = as i started with zero 
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if(typeof discountRate === "number" && discountRate > 0 && discountRate <=1){
       return total - total * discountRate;
  }
  return total; // Bug: Missing validation for discountRate  Sol : added discountRate number validation and range allowed (checked first console errors and located line number to track)
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });

  if(typeof total === "number"){
      receipt += `Total: $${total.toFixed(2)}`;
  }else {
     receipt += `Total: ${total}`;
  }

   // Bug: total may not be a number  : Sol : Added check for number to add decimals
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
