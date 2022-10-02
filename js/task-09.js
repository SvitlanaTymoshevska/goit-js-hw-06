const refs = {
    body: document.querySelector('body'),
    spanColor: document.querySelector('.color'),
    buttonChangeColor: document.querySelector('.change-color'),
};

refs.buttonChangeColor.addEventListener('click', handleChangeColor);

function handleChangeColor(event) {
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.spanColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}