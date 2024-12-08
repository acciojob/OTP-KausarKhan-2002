//your JS code here. If required.

const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
  code.addEventListener('input', (e) => {
    if (e.target.value) {
      const nextInput = codes[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value) {
      const previousInput = codes[index - 1];
      if (previousInput) {
        previousInput.focus();
      }
    }
  });
});
