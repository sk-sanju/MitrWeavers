document.addEventListener("DOMContentLoaded", function () {
const products = [
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p2.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p3.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p4.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p5.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p6.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p7.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p8.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p9.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p10.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p11.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p12.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/13.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/14.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/15.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p16.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p17.jpg?raw=true"
  },
];
const productContainer = document.getElementById("productContainer");
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