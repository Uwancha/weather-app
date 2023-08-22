
async function getWeatherData(location) {
    
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=be0f50b29f0a499ca4995922232008&q=${location}&days=7&alerts=yes`;
    
  try {
     
    const response = await fetch(apiUrl);
      
      
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
  
      
    const data = await response.json();
  
      
    return data;
    } catch (error) {
      throw error;
    }
  }

  export { getWeatherData }