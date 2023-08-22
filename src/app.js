import { getWeatherData } from "./apis";
import { displayWeatherData  } from "./dom";
import "./style.css"


function handleSearch() {
  const cityInput = document.querySelector("input");
  const city = cityInput.value.trim();

  if (!city) return;

  fetchAndDisplayWeatherForecast(city);
  cityInput.value = "";
}


const searchButton = document.querySelector(".search");
searchButton.addEventListener("click", async () => {
  try {
    handleSearch();
  }catch (error) {
    console.log(`Error occured: ${error}`);
  }
});


const cityInput = document.querySelector("input");
cityInput.addEventListener("keydown", (event) => {
  try{
    if (event.key === "Enter") {
      handleSearch();
    }
  }catch (error) {
    console.log(`Error occured: ${error}`);
  }
  });


async function fetchAndDisplayWeatherForecast (city) {
  
  try {
    const weatherData = await getWeatherData(city);

    displayWeatherData(weatherData)

  } catch (error) {
    console.error('Error occurred:', error);
  }

}

fetchAndDisplayWeatherForecast('Addis Ababa');

