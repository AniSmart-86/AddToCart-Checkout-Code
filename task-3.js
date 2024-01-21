
var readlineSync = require('readline-sync');




const Items = [
  { id: 1, name: "cashew",
   price: 150 },
  { id: 2, name: "Biscuit",
   price: 230 },
  { id: 3, name: "gala",
   price: 100 },
  { id: 4, name: "malt",
   price: 300 },
  { id: 5, name: "cold stone",
   price: 1500 },
  { id: 6, name: "Bread",
   price: 300 },
  { id: 7, name: "Ice-cream",
   price: 55 },
  { id: 8, name: "Cake",
   price: 600 },
  { id: 9, name: "Chocolate",
   price: 350 },
  { id: 10, name: "Apple",
   price: 450 },
  { id: 11, name: "Banana",
   price: 550 },
  { id: 12, name: "Orange",
   price: 80},
  { id: 13, name: "Strawberry",
   price: 640 },
  { id: 14, name: "juice",
   price: 200 },
  { id: 15, name: "Yoghourt",
   price: 1250 },
];

// Add to cart

let cart = [];

function showItems() {
  console.log("\nAvailable Items:");
  Items.forEach((Items) => {
    console.log(
      `[${Items.id}] ${Items.name} - $${Items.price.toFixed(2)}`,
    );
  });
}

function addToCart(ItemsId, quantity) {
  const selectedItems = Items.find((Item) => Items.id === ItemsId);
  if (selectedItems) {
    const itemInCart = cart.find((item) => item.Items.id === ItemsId);
    if (itemInCart) {
      itemInCart.quantity += quantity;
    } else {
      cart.push({ Items: selectedItems, quantity });
    }
    console.log(`\nAdded ${quantity} ${selectedItems.name}(s) to the cart.`);
  } else {
    console.log("\nInvalid Items ID.");
  }
}

function showCart() {
  console.log("\nShopping Cart:");
  cart.forEach((item) => {
    console.log(`${item.Items.name} - Quantity: ${item.quantity}`);
  });
}

function checkout() {
  let total = 0;
  cart.forEach((item) => {
    total += item.Items.price * item.quantity;
  });
  console.log(`\nTotal: $${total.toFixed(2)}`);
  console.log("Thank you for your excellent shopping!");
  cart = [];
}

function startShopping() {
  while (true) {
    console.log("\nYou are welcome to smart shopping store");
    console.log("Kindly select a number of choice");
    console.log("1. Display Items");
    console.log("2. Add to Cart");
    console.log("3. View Cart");
    console.log("4. Checkout");
    console.log("5. Exit");

    const choice = readlineSync.question("Choose A Number: ");

    switch (choice) {
      case "1":
        displayItems();
        break;
      case "2":
        const ItemsId = parseInt(
          readlineSync.question("\nEnter the Items ID: "),
          15,
        );
        const quantity = parseInt(
          readlineSync.question("\nEnter the quantity: "),
          15,
        );
        addToCart(ItemsId, quantity);
        break;
      case "3":
        displayCart();
        break;
      case "4":
        checkout();
        break;
      case "5":
        console.log("Thanks and Bye!");
        process.exit();
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

startShopping();

  