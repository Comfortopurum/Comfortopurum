const productsContainer = document.getElementById('products-container');
const cart = document.getElementById('cart');
const viewCartBtn = document.getElementById('view-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItems = document.getElementById('cart-items');

// Sample product data (you can replace it with your actual data)
const products = [
    { id: 1, name: 'T-shirt', price: 20, image: 'tshirt.jpg' },
    { id: 2, name: 'Jeans', price: 50, image: 'jeans.jpg' },
    { id: 3, name: 'Sneakers', price: 80, image: 'sneakers.jpg' }
];

// Display products
function displayProducts() {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = document.createElement('li');
    cartItem.textContent = `${product.name} - $${product.price}`;
    cartItems.appendChild(cartItem);
}

// Toggle cart visibility
viewCartBtn.addEventListener('click', () => {
    cart.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeCartBtn.addEventListener('click', () => {
    cart.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

// Initialize
displayProducts();
