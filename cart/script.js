document.addEventListener("DOMContentLoaded", function() {
    // Retrieve cart data from localStorage
    let cartData = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to render cart items
    function renderCart() {
        const cartContainer = document.getElementById('cart-container');
        cartContainer.innerHTML = '';

        cartData.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div>Name: ${item.name}</div>
                <div>Price: $${item.price}</div>
                <div>Quantity: ${item.quantity}</div>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            `;
            cartContainer.appendChild(itemElement);
        });

        // Calculate total cost
        const totalCost = cartData.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        document.getElementById('total-cost').textContent = `$${totalCost.toFixed(2)}`;
    }

    // Render initial cart
    renderCart();

    // Add event listener for remove buttons
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-btn')) {
            const itemId = parseInt(event.target.getAttribute('data-id'));
            cartData = cartData.filter(item => item.id !== itemId);
            localStorage.setItem('cart', JSON.stringify(cartData));
            renderCart();
        }
    });

    // Event listener for checkout button
    document.getElementById('checkout-btn').addEventListener('click', function() {
        // Redirect to checkout page
        window.location.href = '/checkout.html';
    });
});
