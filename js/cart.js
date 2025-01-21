  document.addEventListener('DOMContentLoaded', function() {
    const cartItemsElement = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let subtotal = 0;
        let shipping = 0;
        cartItemsElement.innerHTML = '';

        cart.forEach(item => {
            const total = item.price * item.quantity;
            subtotal += total;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td class="price">${item.price}</td>
                <td>
                    <input type="number" class="form-control quantity" value="${item.quantity}" min="1" data-id="${item.id}">
                </td>
                <td class="total">${total.toFixed(2)}</td>
                <td><button class="btn btn-danger btn-sm remove-item" data-id="${item.id}">Remove</button></td>
            `;
            cartItemsElement.appendChild(row);
        });
        shippingElement.textContent = shipping.toFixed(2);
        subtotalElement.textContent = subtotal.toFixed(2);
        totalElement.textContent = subtotal.toFixed(2);

        attachEventListeners();
    }

    function attachEventListeners() {
        document.querySelectorAll('.quantity').forEach(input => {
            input.addEventListener('input', function() {
                const id = this.dataset.id;
                const quantity = parseInt(this.value);
                updateQuantity(id, quantity);
            });
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.dataset.id;
                removeItem(id);
            });
        });
    }

    function updateQuantity(id, quantity) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }
    }

    function removeItem(id) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }

    loadCart();
});