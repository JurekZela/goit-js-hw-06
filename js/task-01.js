const itemsRef = document.querySelectorAll('li.item');
console.log('Number of categories:', itemsRef.length);

itemsRef.forEach((item) => {
    const categoryTitles = item.querySelector('h2').textContent;
const categoryElements = item.querySelectorAll('li').length;

console.log('Category:', categoryTitles);
console.log('Elements:', categoryElements);
});