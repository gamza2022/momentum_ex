const calculator = document.querySelector(".calculator");
const calculator_iframe = document.querySelector(".calculator_iframe");

function calculator_click_handler() {
    calculator_iframe.classList.remove("hidden_three");

}



calculator.addEventListener("click", calculator_click_handler);