const weather = document.querySelector(".weather");
const weather_iframe = document.querySelector(".weather_iframe");

function weather_click_handler() {
    weather_iframe.classList.remove("hidden_three");

}



weather.addEventListener("click", weather_click_handler);