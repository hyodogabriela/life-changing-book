let apiKey = "f0308t4943329c9be1off0f74f2fa59a";
let city = "Brooklyn";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl)
  .then(response => {
    let temperature = response.data.temperature.current;
    let temperatureDisplay = document.getElementById('temperatureDisplay');
    temperatureDisplay.innerHTML = temperature; 
  });
//   .catch(error => {
//     console.error('Error fetching temperature:', error);
//     const temperatureDisplay = document.getElementById('temperatureDisplay');
//     temperatureDisplay.innerHTML = `<p>Error fetching temperature for ${city}</p>`;
//   });