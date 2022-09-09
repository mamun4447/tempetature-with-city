const API_KEY = `0ecb04b5654a5d9051255666ce758448`;

//Featch Api
const featchApi = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url)
    const data = await res.json()
    getCity(data);
    displayTemp(data);
    weatherDisplay(data);



}

//getCity
document.getElementById("geiCityBtn").addEventListener('click', function() {
    const getCity = document.getElementById("getCity").value;
    getCity.value = '';
    featchApi(getCity);
});

//Display temp
const displayTemp = data => {
    const temperature = document.getElementById("temperature");
    temperature.innerText = data.main.temp;

}

//Get city
const getCity = (data) => {
        const city = document.getElementById("city");
        city.innerText = data.name;
    }
    //Weather 
const weatherDisplay = (data) => {
    const weather = document.getElementById("weather");
    weather.innerText = data.weather[0].main;
}

//Defult data
featchApi('dhaka')