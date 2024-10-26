const products = [
    {
        name: "Aimbot Pro",
        description: "Amélioration de la précision pour FPS",
        price: "€49.99",
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        name: "WallHack Elite",
        description: "Voir à travers les murs dans les jeux",
        price: "€39.99",
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        name: "Speed Boost",
        description: "Augmentation de la vitesse de déplacement",
        price: "€29.99",
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        name: "Auto Farm",
        description: "Farming automatique pour les jeux de survie",
        price: "€34.99",
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        name: "Radar Hack",
        description: "Localisation avancée des ennemis",
        price: "€44.99",
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        name: "Inventory Editor",
        description: "Modification d'inventaire pour RPG",
        price: "€54.99",
        image: "/placeholder.svg?height=200&width=300"
    }
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
        <button onclick="addToCart('${product.name}')">Acheter</button>
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