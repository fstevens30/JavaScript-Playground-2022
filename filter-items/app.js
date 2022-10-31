// Get all items with the class of item
const items = document.querySelectorAll('.item');

// Give each item a corresponding name and price, given with the class of name and price
const itemsArray = Array.from(items).map(item => {
    const name = item.querySelector('.name').textContent;
    const price = item.querySelector('.price').textContent;
    return { name, price };
});