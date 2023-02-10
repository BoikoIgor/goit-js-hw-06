const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', function AnonymousNameChek() {
  if (this.value === '') {
    nameOutput.textContent = 'Anonymous';
  }
  nameOutput.textContent = this.value;
});
