// === RECHERCHE ===
const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  products.forEach((product) => {
    const name = product.querySelector("h3").innerText.toLowerCase();
    product.style.display = name.includes(query) ? "block" : "none";
  });
});

// === NAVIGATION PRODUIT ===
function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

// === FILTRAGE PAR CATÉGORIE ===
function filterCategory(category) {
  products.forEach((product) => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// === PANIER ===
function goToCart() {
  window.location.href = "cart.html";
}


