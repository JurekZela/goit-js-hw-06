const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryElement = document.querySelector('.gallery');

const createGalleryItem = ({url, alt}) => {
  return `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}" width = 200px, height = 150px list-style = none;  class="gallery-image">
    </li>
  `;
};

const createGallery = (images) => {
  const galleryItems = images.map(createGalleryItem).join('');
  galleryElement.insertAdjacentHTML('beforeend', galleryItems);
};

createGallery(images);
