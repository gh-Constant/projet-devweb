document.addEventListener('DOMContentLoaded', function() {
    const cartTable = document.getElementById('cart-table');
    const cartTotal = document.getElementById('cart-total');

    function updateItemTotal(row) {
        const quantity = parseInt(row.querySelector('.quantite').value);
        const price = parseFloat(row.dataset.price);
        const itemTotal = (quantity * price).toFixed(2);
        row.querySelector('.item-total').textContent = itemTotal + ' €';
        return parseFloat(itemTotal);
    }

    function updateCartTotal() {
        const rows = cartTable.querySelectorAll('tbody tr');
        let total = 0;
        rows.forEach(row => {
            total += updateItemTotal(row);
        });
        cartTotal.textContent = 'Total : ' + total.toFixed(2) + ' €';
    }

    function handleQuantityChange(event) {
        const input = event.target;
        if (input.value < 0) {
            input.value = 0;
        }
        updateCartTotal();
    }

    function handleRemoveItem(event) {
        if (event.target.classList.contains('supprime')) {
            const row = event.target.closest('tr');
            row.remove();
            updateCartTotal();
        }
    }

    cartTable.addEventListener('input', function(event) {
        if (event.target.classList.contains('quantite')) {
            handleQuantityChange(event);
        }
    });

    cartTable.addEventListener('click', handleRemoveItem);

    updateCartTotal();
});