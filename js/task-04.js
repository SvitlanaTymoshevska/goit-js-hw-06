const refs = {
    value: document.querySelector('#value'),
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

const onDecrementValue = (event) => refs.value.textContent = counterValue -= 1;

const onIncrementValue = (event) => refs.value.textContent = counterValue += 1;

refs.decrement.addEventListener('click', onDecrementValue);
refs.increment.addEventListener('click', onIncrementValue);