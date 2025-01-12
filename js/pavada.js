
const products = [
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p2.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p3.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p4.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p5.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p6.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p7.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p8.png?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p9.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p10.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p11.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p12.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/13.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/14.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/15.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p16.jpg?raw=true"
  },
  {
    title: "KIDS FROCK",
    price: "₹299.00",
    description: "Adorable and comfortable kids' frock designed to suit your little one’s charm and style, perfect for 6 months and younger",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/pavada/p17.jpg?raw=true"
  },
];

    const productContainer = document.getElementById("productContainer");

    // Function to render product cards
    function displayProductCards(products) {
      products.forEach(product => {
        // Create card elements
        const card = document.createElement("div");
        card.className = "product-card";

        const img = document.createElement("img");
        img.className = "product-image";
        img.src = product.image;
        img.alt = product.title;

        const details = document.createElement("div");
        details.className = "product-details";

        const title = document.createElement("h3");
        title.className = "product-title";
        title.textContent = product.title;

        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = product.price;

        const description = document.createElement("p");
        description.className = "product-description";
        description.textContent = product.description;

        const buyNow = document.createElement("a");
        buyNow.className = "buy-now";
        buyNow.href = "#";
        buyNow.textContent = "Buy";

        const addToCart = document.createElement("button");
        addToCart.className = "cart";
        addToCart.textContent = "Cart";
        addToCart.addEventListener("click", () => {
            alert(`${product.title} has been added to your cart.`);
            window.location.href = "/cart.html";
        });

        // Append elements to card
        details.appendChild(title);
        details.appendChild(price);
        details.appendChild(description);
        details.appendChild(buyNow);
        details.appendChild(addToCart);
        card.appendChild(img);
        card.appendChild(details);

        // Append card to container
        productContainer.appendChild(card);
      });
    }

    // Call the function to display product cards
    displayProductCards(products);