const products = [
    {
        name: "Valorant",
        description: "Aimbot, ESP, Wallhack",
        price: "€49.99",
        image: "/assets/hydra/valorantbanner.png"
    },
    {
        name: "Counter Strike 2",
        description: "Aimbot, Triggerbot, Radar",
        price: "€39.99",
        image: "/assets/hydra/cs2banner.png"
    },
    {
        name: "Rust",
        description: "ESP, Auto Farm, Resource Detector",
        price: "€29.99",
        image: "/assets/hydra/rustbanner.png"
    },
    {
        name: "Apex Legends",
        description: "Aimbot, ESP, No Recoil",
        price: "€34.99",
        image: "/assets/hydra/apexbanner.png"
    },
    {
        name: "Tarkov",
        description: "Radar, Inventory Hack, Aimbot",
        price: "€44.99",
        image: "/assets/hydra/tarkovbanner.png"
    }
];



function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-card-content">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
        <button onclick="addToCart('${product.name}')">Acheter</button>
        </div>
    `;
    return card;
}

function addToCart(productName) {
    alert(`${productName} ajouté au panier!`);
    // Implement actual cart functionality here
}

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        productList.appendChild(createProductCard(product));
    });
});