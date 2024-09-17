const apiKey = "ffe85d3db3dcdf61a516106d734ab21c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const imgSrc = document.querySelector(".rain-img");
const searchArea = document.querySelector(".cityName");
const searchBtn = document.querySelector(".search-img");

async function checkWheather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp h1").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "Km/hr";

    if(data.weather[0].main == "Clouds"){
        imgSrc.src = "weather-app-img/images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        imgSrc.src = "weather-app-img/images/clear.png";
    }else if(data.weather[0].main == "Drizzle"){
        imgSrc.src = "weather-app-img/images/drizzle.png";
    }else if(data.weather[0].main == "Rain"){
        imgSrc.src = "weather-app-img/images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        imgSrc.src = "weather-app-img/images/snow.png";
    }else if(data.weather[0].main == "Mist"){
        imgSrc.src = "weather-app-img/images/mist.png";
    }
}

searchBtn.addEventListener('click',()=>{
    checkWheather(searchArea.value);
})





