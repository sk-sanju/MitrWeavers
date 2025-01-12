const products = [
  {
    title: "TISSUE SHIRT (CUSTOM)",
    price: "₹329.00 - ₹349.00",
    description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s1.jpg?raw=true",
  },
  {
    title: "COLOUR SHIRT (CUSTOM)",
    price: "₹400.00 - ₹559.00",
    description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s3.jpg?raw=true",
  },
  {
    title: "COLOUR SHIRT (CUSTOM)",
    price: "₹400.00 - ₹559.00",
    description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s4.jpg?raw=true",
  },
  {
    title: "COLOUR SHIRT (CUSTOM)",
    price: "₹400.00 - ₹559.00",
    description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s5.jpg?raw=true",
  },
  {
    title: "COLOUR SHIRT (CUSTOM)",
    price: "₹400.00 - ₹559.00",
    description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s6.jpg?raw=true",
  },
  {
    title: "COLOUR SHIRT (CUSTOM)",
    price: "₹400.00 - ₹559.00",
    description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s7.jpg?raw=true",
  },
  {
    title: "COLOUR SHIRT (CUSTOM)",
    price: "₹400.00 - ₹559.00",
    description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s8.jpg?raw=true",
  },
  {
    title: "COLOUR SHIRT (CUSTOM)",
    price: "₹400.00 - ₹559.00",
    description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s9.jpg?raw=true",
  },
  {
    title: "TISSUE KURTHA (CUSTOM)",
    price: "₹429.00 - ₹559.00",
    description: "Elegant Kerala traditional kids' shirts, crafted with care for ages 1 to 10, blending heritage and comfort.",
    image: "https://github.com/sk-sanju/MitrWeavers/blob/main/images/shirt/s2.jpg?raw=true",
  },
];
const productContainer = document.getElementById("shirtProductContainer");
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