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