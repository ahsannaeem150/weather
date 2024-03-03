const locationText = document.querySelector('#location');
const latitudeText = document.querySelector('#lat');
const longitudeText = document.querySelector("#lon");
const weatherText = document.querySelector('#weatherStatus');

navigator.geolocation.getCurrentPosition((position) => {
    const urlWeatherStatus = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=674a38063f6461c461141b974e47a984`
    async function getWeather() {
        const weatherResponse = await fetch(urlWeatherStatus);
        const weatherData = await weatherResponse.json();
        locationText.textContent = weatherData.name;
        latitudeText.textContent = position.coords.latitude;
        longitudeText.textContent = position.coords.longitude;
        weatherText.textContent = weatherData.weather[0].description;
    }
    getWeather();
})







