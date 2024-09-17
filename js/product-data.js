
const products = [
    { id: 1, title: "Luxury Leather Sofa", image: "img/sofa-1.png", description: "A premium leather sofa for luxury living.",price: "$499", rating: "★★★★☆" },
    { id: 2, title: "Modern Fabric Sofa", image: "img/sofa-2.png", description: "A comfortable and modern fabric sofa.",price: "$599", rating: "★★★★☆" },
    { id: 3, title: "Classic Velvet Sofa", image: "img/sofa-3.png", description: "A classic velvet sofa for timeless elegance.",price: "$699", rating: "★★★☆☆" },
    { id: 4, title: "Contemporary Sectional Sofa", image: "img/sofa-4.png", description: "A contemporary sectional sofa with adjustable back.",price: "$550" ,rating: "★★★★★" },
    { id: 5, title: "Recliner Sofa", image: "img/sofa-5.png", description: "A recliner sofa for ultimate relaxation.", price: "$600",rating: "★★★★☆" },
    { id: 6, title: "Convertible Sofa Bed", image: "img/sofa-6.png", description: "A convertible sofa bed for functionality and style.",price: "$790", rating: "★★★☆☆" }
];

// Fetch the product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'), 10);

// Find the product based on ID
const product = products.find(p => p.id === productId);

// Populate product details on the page
document.getElementById('product-title').innerText = product.title;
document.getElementById('product-image').src = product.image;
document.getElementById('product-description').innerText = product.description;
document.getElementById('product-rating').innerText = `Rating: ${product.rating}`;
document.getElementById('product-price').innerText = `Rating: ${product.price}`;


// Add to Cart Functionality
document.getElementById('add-to-cart').addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
});
