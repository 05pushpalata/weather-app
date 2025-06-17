async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '3ccfc8fb0ca17a4981d32c5bb07039d1'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${'3ccfc8fb0ca17a4981d32c5bb07039d1'}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    const weatherInfo = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].main}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind: ${data.wind.speed} m/s</p>
    `;

    document.getElementById('weatherInfo').innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById('weatherInfo').innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
