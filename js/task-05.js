const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Var1
nameInput.addEventListener('input', function AnonymousNameChange() {
  if (this.value === '' || this.value === ' ') {
    return (nameOutput.textContent = 'Anonymous');
  }
  nameOutput.textContent = this.value;
});

// Var2
// nameInput.addEventListener('input', event => {
//   if (event.currentTarget.value === '') {
//     return (nameOutput.textContent = 'Anonymous');
//   }
//   nameOutput.textContent = event.currentTarget.value;
// });
