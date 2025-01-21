document.addEventListener("DOMContentLoaded", function () {
const products = [
    {
      title: "DHAVANI SET",
      price: "₹999.00",
      description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/dhavani/d1.jpg?raw=true",
    },
    {
      title: "DHAVANI SET",
      price: "₹999.00",
      description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/dhavani/d2.jpg?raw=true",
    },
    {
      title: "DHAVANI SET",
      price: "₹999.00",
      description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/dhavani/d3.jpg?raw=true",
    },
];
const productContainer = document.getElementById("dhavaniProductContainer");
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "col-md-4 mb-4";
        productCard.innerHTML = `
                <div class="card-body">
                    <img src="${product.image}" class="card-img-top" alt="...">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">Price: ₹${product.price}</p>
                    <p class="card-description">${product.description}</p>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}" data-name="${product.title}" data-price="${product.price}">Add to Cart</button>
                </div>
        `;
        productContainer.appendChild(productCard);
    });

    // Add to Cart functionality
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", function () {
            const id = this.dataset.id;
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);

            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const existingProduct = cart.find((item) => item.id === id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.href = "cart.html"; // Redirect to cart page
        });
    });
});