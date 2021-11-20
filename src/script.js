//Changing city name
function enterCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  let h1 = document.querySelector("#current-city");
  h1.innerHTML = `${input.value}`;
  let apiKey = "6df09177bf10bb0a2b5eb9a9dc845bfd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let form = document.querySelector("#city-search");
form.addEventListener("submit", enterCity);

//API change current temperature

function showTemp(response) {
  let temperatureElement = document.querySelector("#current-temp");
  let localTemperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${localTemperature}º C`;
}

//Bonus adding current location button
function findLocation(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "6df09177bf10bb0a2b5eb9a9dc845bfd";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function findCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(findLocation);
}

let currentLocation = document.querySelector("#location-btn");
currentLocation.addEventListener("click", findCurrentLocation);

//Changing current day and time
let now = new Date();
let currentHours = now.getHours();
if (currentHours < 10) {
  currentHours = `0${currentHours}`;
}
let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekDay = days[now.getDay()];
let currentDate = `${weekDay}, ${currentHours}:${currentMinutes}`;
let today = document.querySelector("#current-date");
today.innerHTML = `${currentDate}`;

//Bonus celsius to fahrenheit
//function changeCelsius(event) {
// event.preventDefault();
//let celsius = document.querySelector("#current-temp");
//celsius.innerHTML = "19°";
//}
//let makeCelsius = document.querySelector("#celsius");
//makeCelsius.addEventListener("click", changeCelsius);

//function changeFahrenheit(event) {
// event.preventDefault();
//let fahrenheit = document.querySelector("#current-temp");
// fahrenheit.innerHTML = "66°";
//}
//let makeFahrenheit = document.querySelector("#fahrenheit");
//makeFahrenheit.addEventListener("click", changeFahrenheit);


