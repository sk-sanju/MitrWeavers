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
    {
      title: "TISSUE SHIRT (CUSTOM)",
      price: "329.00 - 349.00",
      description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s1.jpg?raw=true",
    },
    {
      title: "COLOUR SHIRT (CUSTOM)",
      price: "400.00 - 559.00",
      description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s3.jpg?raw=true",
    },
    {
      title: "COLOUR SHIRT (CUSTOM)",
      price: "400.00 - 559.00",
      description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s4.jpg?raw=true",
    },
    {
      title: "COLOUR SHIRT (CUSTOM)",
      price: "400.00 - 559.00",
      description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s5.jpg?raw=true",
    },
    {
      title: "COLOUR SHIRT (CUSTOM)",
      price: "400.00 - 559.00",
      description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s6.jpg?raw=true",
    },
    {
      title: "COLOUR SHIRT (CUSTOM)",
      price: "400.00 - 559.00",
      description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s7.jpg?raw=true",
    },
    {
      title: "COLOUR SHIRT (CUSTOM)",
      price: "400.00 - 559.00",
      description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s8.jpg?raw=true",
    },
    {
      title: "COLOUR SHIRT (CUSTOM)",
      price: "400.00 - 559.00",
      description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s9.jpg?raw=true",
    },
    {
      title: "TISSUE KURTHA (CUSTOM)",
      price: "429.00 - 559.00",
      description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
      image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s2.jpg?raw=true",
    },
    {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b1.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b2.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b3.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b4.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b5.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b6.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b7.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b8.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b9.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b10.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b11.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b12.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b13.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b14.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b15.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b16.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b17.jpg?raw=true",
      },
      {
        title: "SET MUNDU",
        price: "559.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/set/b18.jpg?raw=true",
      },
      {
        title: "DHAVANI SET",
        price: "999.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/dhavani/d1.jpg?raw=true",
      },
      {
        title: "DHAVANI SET",
        price: "999.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/dhavani/d2.jpg?raw=true",
      },
      {
        title: "DHAVANI SET",
        price: "999.00",
        description: "Elegant and authentic Kerala Set Mundu, a timeless symbol of tradition and grace.",
        image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/dhavani/d3.jpg?raw=true",
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
                    <p class="card-description">Description: ${product.description}</p>
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