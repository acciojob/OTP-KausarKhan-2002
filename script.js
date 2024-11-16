//your JS code here. If required.

let codeContainer = document.querySelector(".code-container");
let codeInput = document.querySelectorAll(".code");

// Focus on the first input on page load
// window.addEventListener("load", () => {
//   codeContainer.firstElementChild.focus();
// });

// To focus on next input element
const focusNextInput = (e) => {
  if (e.target.nextElementSibling && e.key != "Backspace") {
    e.target.nextElementSibling.focus();
  }
};

const focusPreviousInput = (e) => {
    if (e.key == "Backspace") {
        e.target.value = ""
        if (e.target.previousElementSibling) {
            e.target.previousElementSibling.focus();
        }
    }
}

codeInput.forEach((code) => {
  code.addEventListener("keyup", (e) => {
    e.target.value = e.target.value[0];

    focusNextInput(e)
    focusPreviousInput(e)
    
  })
});
