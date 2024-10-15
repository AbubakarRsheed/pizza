function toggleIngredient(element) {
    element.classList.toggle('active');
    updatePrice();
}

function changeQuantity(change) {
    let quantityElement = document.getElementById('quantity');
    let newQuantity = parseInt(quantityElement.innerText) + change;
    if (newQuantity > 0) {
        quantityElement.innerText = newQuantity;
        updatePrice();
    }
}

function updatePrice() {
    let basePrice = 10; // Base price of the pizza
    let quantity = parseInt(document.getElementById('quantity').innerText);
    let additionalPrice = 0;
    
    document.querySelectorAll('.toggle.active').forEach(toggle => {
        let priceText = toggle.previousElementSibling.innerText;
        additionalPrice += parseFloat(priceText.replace('+', '').replace(' USD', ''));
    });

    let totalPrice = (basePrice + additionalPrice) * quantity;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2) + ' USD';
}




function orderPizza() {
    // Navigate to the next page (e.g., "order-summary.html")
    window.location.href = "contactpage.html";
}