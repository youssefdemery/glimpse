// Function to highlight selected category
function selectCategory(element) {
    // Remove 'selected' class from all category items
    const items = document.querySelectorAll('.category-item');
    items.forEach(item => item.classList.remove('selected'));

    // Add 'selected' class to the clicked item
    element.classList.add('selected');
}

// Function to open filter options (you can customize this)
function openFilter() {
    alert('Filter options will appear here!');
}