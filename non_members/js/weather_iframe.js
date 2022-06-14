function geo_ok(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(lat, lon);
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8366987c1c33ccb19cab1f490cd9882e&units=metric`;
    // console.log(weather_url);
    fetch(weather_url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector(".weather_iframe_geo div:first-child");
        const city = document.querySelector(".weather_iframe_geo div:last-child");
        // console.log(data.name, data.weather[0].main);
        weather.innerHTML = data.weather[0].main;
        city.innerHTML = data.name;
    });
}

function geo_error() {
    alert("현재 위치를 불러올수 없습니다. 따라서 Weather기능은 제공되지 않습니다. 이용을 원하신다면 허용을 눌러주세요.");
}

navigator.geolocation.getCurrentPosition(geo_ok, geo_error);





