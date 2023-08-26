

function displayWeatherData(weatherData) {

    const currentConditionElem = document.querySelector('#current-condition');
    const locationElem = document.querySelector('#location');
    const date = document.querySelector('#date');
    const time = document.querySelector('#time');
    const temperatureCel = document.querySelector('#temperature-cel');
    const temperatureFahr = document.querySelector('#temperature-fahr');
    const conditionIconElem = document.querySelector('#condition-icon');
    const feelsLikeElem = document.querySelector('#feels-like');
    const humidityElem = document.querySelector('#humidity');
    const windSpeedElem = document.querySelector('#wind-speed');
    const chanceOfRainElem = document.querySelector('#chance-of-rain');


    const currentWeather = weatherData.current;
    currentConditionElem.textContent = currentWeather.condition.text;
    locationElem.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
    const currentDate = new Date();
    date.textContent = `${new Date().toLocaleString('en-us', { weekday: 'long' })}, ${currentDate.toLocaleDateString()}`;
    time.textContent = currentDate.toLocaleTimeString();
    temperatureCel.textContent = `${currentWeather.temp_c}°C`;
    temperatureFahr.textContent = `${currentWeather.temp_f}°F`;
    conditionIconElem.src = 'https:' + currentWeather.condition.icon;
    feelsLikeElem.textContent = `${currentWeather.feelslike_c}°C / ${currentWeather.feelslike_f}°F`;
    humidityElem.textContent = `${currentWeather.humidity}%`;
    windSpeedElem.textContent = `${currentWeather.wind_kph} Km/h`;
    chanceOfRainElem.textContent = `${currentWeather.precip_mm}%`;
  

    const forecastDays = weatherData.forecast.forecastday.slice(1, 7); // Exclude current day
  
    const forecastContainerElem = document.querySelector('#forecast-container');
    forecastContainerElem.innerHTML = '';
  
    forecastDays.forEach((forecastDay) => {
      const date = forecastDay.date;
      const day = new Date(date).toLocaleString('en-us', { weekday: 'long' });
      const maxTemp = forecastDay.day.maxtemp_c;
      const minTemp = forecastDay.day.mintemp_c;
      const conditionIcon = forecastDay.day.condition.icon;
  
      
      const forecastElem = document.createElement('article');
      forecastElem.classList.add('forecast-item');
  
      const dateElem = document.createElement('h2');
      dateElem.textContent = `${day}`;
  
      const maxTempElem = document.createElement('h3');
      maxTempElem.textContent = `${maxTemp}°C`;
  
      const minTempElem = document.createElement('h5');
      minTempElem.textContent = `${minTemp}°C`;
  
      const conditionIconElem = document.createElement('img');
      conditionIconElem.src = 'https:' + conditionIcon;
  
      
      forecastElem.appendChild(dateElem);
      forecastElem.appendChild(maxTempElem);
      forecastElem.appendChild(minTempElem);
      forecastElem.appendChild(conditionIconElem);
      forecastContainerElem.appendChild(forecastElem);
    });

    
  }


  function displayErrorMessage() {
    const errorMessageContainer = document.querySelector("#error-message")
    
    errorMessageContainer.style.display = "block";
  }


  export { displayErrorMessage, displayWeatherData }