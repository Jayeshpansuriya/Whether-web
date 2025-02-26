document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '77eabccac00f4b16acb64709252402';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('City not found! Please try again.');
            } else {
                displayWeather(data);
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('An error occurred. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.style.display = 'block';

    const locationName = data.location.name;
    const country = data.location.country;
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;
    const icon = data.current.condition.icon;

    weatherInfo.innerHTML = `
        <h3>Weather in ${locationName}, ${country}</h3>
        <img src="https:${icon}" alt="${condition}" />
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${condition}</p>
    `;
}
