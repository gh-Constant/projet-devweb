document.addEventListener('DOMContentLoaded', () => {
    const featuredProducts = [
        {
            name: "Valorant",
            description: "Améliorez vos performances dans Valorant",
            image: "./public/hydra/valorantbanner.png"
        },
        {
            name: "Counter Strike 2",
            description: "Dominez vos adversaires dans CS2",
            image: "./public/hydra/cs2banner.png"
        },
        {
            name: "Apex Legends",
            description: "Devenez le champion d'Apex Legends",
            image: "./public/hydra/apexbanner.png"
        }
    ];

    const productList = document.getElementById('product-list');

    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-card-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        `;
        productList.appendChild(productCard);
    });
});