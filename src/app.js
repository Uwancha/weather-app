import { getWeatherData } from "./apis";
import {displayErrorMessage, displayWeatherData  } from "./dom";
import "./style.css"


function handleSearch() {
  const cityInput = document.querySelector("input");
  const city = cityInput.value.trim();

  if (!city) return;

  const errorMessage = document.getElementById("error-message");
  errorMessage.style.display = "none";

  fetchAndDisplayWeatherForecast(city);

  cityInput.value = "";
}


const searchButton = document.querySelector(".search");
searchButton.addEventListener("click",handleSearch);


const cityInput = document.querySelector("input");
cityInput.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    handleSearch();
  }
  
} );


async function fetchAndDisplayWeatherForecast (city) {
  
  try {
    const weatherData = await getWeatherData(city);

    displayWeatherData(weatherData)

  } catch (error) {
    console.error('Error occurred:', error);

    displayErrorMessage();
  }

}

fetchAndDisplayWeatherForecast('Addis Ababa');

