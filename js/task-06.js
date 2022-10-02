const inputRef = document.querySelector('#validation-input');
const validValue = parseInt(inputRef.dataset.length, 10);

inputRef.addEventListener('blur', InputValidation);

function InputValidation(event) { 
    const currentInput = event.currentTarget;
    const currentLength = currentInput.value.length;

    if (currentLength === validValue && !inputRef.classList.contains('valid')) {
        currentInput.classList.toggle('valid');
        currentInput.classList.remove('invalid');
    } else if (currentLength !== validValue && !inputRef.classList.contains('invalid')) {
        currentInput.classList.toggle('invalid');
        currentInput.classList.remove('valid');
    } 
}