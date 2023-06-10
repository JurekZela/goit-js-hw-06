function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controlsRef: document.querySelector('#controls'),
  boxesRef: document.querySelector('#boxes'),
};

refs.controlsRef.children[1].addEventListener('click', createCollection);

function createCollection(event){
event.preventDefault();
};
