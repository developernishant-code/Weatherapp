let searchform = document.querySelector("#search-form")
searchform.addEventListener("submit", function (e) {
    e.preventDefault()

    let cityinput = document.querySelector("#city-input").value;
    // console.log(cityinput)
    let weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityinput}&appid=0f2fb94282ad6a3dbf2387c407b74806&units=metric`;

    async function getweather(e) {
        let response = await fetch(weatherurl);
        let data = await response.json();
        showweather(data);
    }

    function showweather(data) {

        let cardmain = document.querySelector(".card-main");

        cardmain.innerHTML = `
            <div class="weather-peak">
                <div class="name">${data.name}</div>
                <div class="temp">${data.main.temp}°C</div>
            </div>

            <div class="desc">${data.weather[0].description}</div>

            <ul class="details">
                <li>Humidity: <span>${data.main.humidity}%</span></li>
                <li>Wind: <span>${data.wind.speed} km/h</span></li>
                <li>Feels like: <span>${data.main.feels_like}°C</span></li>
            </ul>
        `;
    }

    getweather();
});
