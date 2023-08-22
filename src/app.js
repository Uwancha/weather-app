import { getWeatherData } from "./apis";
import "./style.css"


const search = document.querySelector(".search");
search.addEventListener("click", () => {
  console.log("fetching...")
  fetchAndDisplayWeatherForecast()

});

async function fetchAndDisplayWeatherForecast () {
  
  const city = document.querySelector("input");

  if (!city.value) return;

  try {
    const weatherData = await getWeatherData(city.value);

    handleCurrentWeatherData(weatherData);
    handleForecastWeatherData(weatherData);

    city.value = "";

  } catch (error) {
    throw error
  }

}

  
  // Function to handle current weather data
function handleCurrentWeatherData(data) {
    console.log(data)
    console.log('Location:', data.location.name);
    console.log('Temperature:', data.current.temp_c);
    console.log('Conditions:', data.current.condition.text);


}


//Function to handle 3 days forecast
 function handleForecastWeatherData (data) {
    console.log(data)

    const forecastDays = data.forecast.forecastday;

  console.log('Weather Forecast:');

  forecastDays.forEach((forecastDay) => {
    const date = forecastDay.date;
    const condition = forecastDay.day.condition.text;
    const maxTemp = forecastDay.day.maxtemp_c;
    const minTemp = forecastDay.day.mintemp_c;

    console.log('Date:', date);
    console.log('Condition:', condition);
    console.log('Max Temperature:', maxTemp);
    console.log('Min Temperature:', minTemp);
    console.log('----------------');
  });

  const alerts = data.alerts;
  
  if (alerts && alerts.length > 0) {
    console.log('Weather Alerts:');
    
    alerts.forEach((alert) => {
      const alertTitle = alert.title;
      const alertDescription = alert.description;
      
      console.log('Title:', alertTitle);
      console.log('Description:', alertDescription);
      console.log('----------------');
    });
  } else {
    console.log('No weather alerts found.');
  }
  
 }


