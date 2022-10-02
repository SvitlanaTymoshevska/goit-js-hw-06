const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) { 
    const value = event.currentTarget.value;
    outputRef.textContent = value !== '' ? value : "Anonymous";
}