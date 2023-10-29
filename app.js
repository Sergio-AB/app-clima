const apiKey = "d33cd144461f4b43cf6d34e79f1a7f58";

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return {
        temperature: data.main.temp,
        humidity: data.main.humidity,
        weather: data.weather[0].main,
      };
    });
}

function getWeatherInfo() {
  const cityInput = document.getElementById("city-input");
  const weatherInfo = document.getElementById("weather-info");

  if (cityInput.value) {
    getWeather(cityInput.value)
      .then((data) => {
        const weatherHTML = `
          <h2>Información del Clima</h2>
          <p>Ciudad: ${cityInput.value}</p>
          <p>Temperatura: ${data.temperature}°C</p>
          <p>Humedad: ${data.humidity}%</p>
          <p>Clima: ${data.weather}</p>
        `;
        weatherInfo.innerHTML = weatherHTML;
      })
      .catch((error) => {
        weatherInfo.innerHTML = "No se encontró información para la ciudad ingresada.";
      });
  } else {
    weatherInfo.innerHTML = "Por favor, ingresa una ciudad válida y haz clic en 'Buscar'.";
  }
}
