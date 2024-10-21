cc_10.js
document.addEventListener("DOMContentLoaded", () => {
    const priceDisplay = document.getElementById("product-price");
    const sizeDropdown = document.getElementById("size-options");
    const purchaseButton = document.getElementById("purchase-button");

    // Price mapping based on size
    const priceMap = {
        small: 10.0,
        medium: 12.5,
        large: 15.0
    };
   // Availability mapping based on size
   const availabilityMap = {
    small: true,
    medium: true,
    large: false // Large is out of stock
};

// Function to update price and button availability
function updateProductDetails() {
    const selectedSize = sizeDropdown.value;
    // Update the price display based on the selected size
    priceDisplay.textContent = "$" + {priceMap[selectedSize].toFixed(2)}`;
    // Enable or disable the purchase button based on stock availability
    purchaseButton.disabled = !availabilityMap[selectedSize];
}

// Initialize the product details when the page loads
updateProductDetails();

// Event listener for size dropdown changes
sizeDropdown.addEventListener("change", updateProductDetails);


    // Event listener for the purchase button
    purchaseButton.addEventListener("click", () => {
        const selectedSize = sizeDropdown.value;
        if (availabilityMap[selectedSize]) {
            alert("Purchase successful!");
        } else {
            alert("This product is out of stock.");
        }
    });
});