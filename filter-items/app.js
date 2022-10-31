// Get all items with the class of item
const items = document.querySelectorAll('.item');

// Give each item a corresponding name and price, given with the class of name and price
const itemsArray = Array.from(items).map(item => {
    const name = item.querySelector('.name').textContent; // Get the name of the item
    const price = item.querySelector('.price').textContent; // Get the price of the item
    return { name, price }; // Return an object with the name and price
});

// Functions

// Filter by price low to high
function filterPriceLowHigh() {
    const sorted = itemsArray.sort((a, b) => a.price - b.price); // Sort the items by price low to high
    displayItems(sorted); // Display the items
}

// Filter by price high to low
function filterPriceHighLow() {
    const sorted = itemsArray.sort((a, b) => b.price - a.price); // Sort the items by price high to low
    displayItems(sorted); // Display the items
}

// Filter by name A to Z
function filterNameAToZ() {
    const sorted = itemsArray.sort((a, b) => {
        if (a.name > b.name) { // If the name of the first item is greater than the second item
            return 1; // Return 1
        } else {
            return -1; // Else return -1
        }
    });
    displayItems(sorted); // Display the items
}

// Display the items
function displayItems(items) {
    const html = items.map(item => {
        return `
            <li class="item">
                <p class="name">${item.name}</p>
                <p class="price">${item.price}</p>
            </li>
        `;
    }).join(''); // Join the items together
    itemsList.innerHTML = html; // Display the items
}