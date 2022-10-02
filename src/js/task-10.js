const refs = {
    input: document.querySelector('#controls input'),
    createBoxesButton: document.querySelector('[data-create]'),
    destroyBoxesButton: document.querySelector('[data-destroy]'),
    boxes: document.querySelector('#boxes'),
};

const onClickCreateBoxes = () => createBoxes(refs.input.value);

const onClickDestroyBoxes = () => destroyBoxes();

refs.createBoxesButton.addEventListener('click', onClickCreateBoxes);
refs.destroyBoxesButton.addEventListener('click', onClickDestroyBoxes);

function createBoxes(requiredAmount) { 

    const boxes = [];
    let generatedAmount = 0;
    let size = 30;

    while (requiredAmount > generatedAmount) {
        const box = document.createElement('div');
        box.classList = 'box';
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor(); 
        boxes.push(box);
        generatedAmount += 1;
        size += 10;
    }
  
    return refs.boxes.append(...boxes);
}

function destroyBoxes() { 
    return refs.boxes.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}