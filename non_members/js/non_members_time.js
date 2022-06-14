const time = document.querySelector(".time");
const time_iframe = document.querySelector(".time_iframe");

function time_click_handler() {
    time_iframe.classList.remove("hidden_three");

}



time.addEventListener("click", time_click_handler);