// Shop Now Button
function shopNow() {
    alert("Welcome! Explore our beautiful saree collection.");
}

// Update Cart Count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

// Add to Cart
function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product + " added to cart successfully!");
}

// Search Product
function searchProduct() {

    let product = document.getElementById("searchBox").value;

    if (product.toLowerCase() == "silk saree") {
        alert("Silk Saree Available ✅");
    }
    else if (product.toLowerCase() == "cotton saree") {
        alert("Cotton Saree Available ✅");
    }
    else if (product.toLowerCase() == "designer saree") {
        alert("Designer Saree Available ✅");
    }
    else if (product.toLowerCase() == "party wear saree") {
        alert("Party Wear Saree Available ✅");
    }
    else {
        alert("Product Not Found ❌");
    }
}

// Run when page loads
window.onload = function () {
    updateCartCount();
};