const categoriesRef = document.querySelector('#categories');
const itemRef = categoriesRef.querySelectorAll('.item');

function onCategoriesLengthChildren() {
const lengthChildren = categoriesRef.children.length;

    console.log(`Number of categories: ${lengthChildren}`)
};
onCategoriesLengthChildren();



itemRef.forEach( category => {
        const titleName = category.querySelector('h2');
        const lengthList = category.querySelectorAll('ul li');

        console.log(`Category: ${titleName.textContent}`);
        console.log(`Elements: ${lengthList.length}`);
    }
);
