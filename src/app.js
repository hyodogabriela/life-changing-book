let apiKey = "f0308t4943329c9be1off0f74f2fa59a";
let city = "Brooklyn";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;



axios.get(apiUrl)
  .then(response => {
    let description = response.data.condition.description;
    let descriptionElement = document.getElementById('descriptionElement');
    descriptionElement.innerHTML = description;
    let iconElement = document.querySelector("#icon");
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon">`;
    let temperature = response.data.temperature.current;
    let temperatureDisplay = document.getElementById('temperatureDisplay');
    temperatureDisplay.innerHTML = Math.round(temperature);
  
  });