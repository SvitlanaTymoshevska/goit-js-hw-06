const refs = {
    body: document.querySelector('body'),
    spanColor: document.querySelector('.color'),
    buttonChangeColor: document.querySelector('.change-color'),
};

refs.buttonChangeColor.addEventListener('click', handleChangeColor);

function handleChangeColor(event) {
    const backgroundColor = getRandomHexColor();
    refs.body.style.backgroundColor = backgroundColor;
    refs.spanColor.textContent = backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}