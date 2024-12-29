function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');

    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - ₹${price}`;

    cartItems.appendChild(listItem);

    alert(`${productName} has been added to your cart!`);
  }