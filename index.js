let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productId = productCard.getAttribute('data-id');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;

        // Add product to the cart array
        cart.push({ id: productId, name: productName, price: productPrice });

        // Update cart count in header
        document.getElementById('cart-count').textContent = cart.length;
        alert(`${productName} has been added to your cart!`);
    });
});

// Function to display cart items (optional for debugging)
function displayCart() {
    console.log(cart);
}
