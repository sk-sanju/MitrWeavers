function loadCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }

    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.title;

      const details = document.createElement('div');
      details.className = 'cart-item-details';

      const title = document.createElement('h3');
      title.textContent = item.title;

      const price = document.createElement('p');
      price.textContent = `Price: ${item.price}`;

      const quantity = document.createElement('p');
      quantity.textContent = `Quantity: 1`;

      details.appendChild(title);
      details.appendChild(price);
      details.appendChild(quantity);

      cartItem.appendChild(img);
      cartItem.appendChild(details);

      cartItemsContainer.appendChild(cartItem);

      // Calculate total price (assuming price is in format ₹XXX.XX)
      const priceNumber = parseFloat(item.price.replace('₹', ''));
      total += priceNumber;
    });

    cartTotal.textContent = total.toFixed(2);
  }

  // Call the function to load cart items
  loadCart();