const date = document.querySelector(".date");
const date_iframe = document.querySelector(".date_iframe");

function date_click_handler() {
    date_iframe.classList.remove("hidden_three");

}



date.addEventListener("click", date_click_handler);