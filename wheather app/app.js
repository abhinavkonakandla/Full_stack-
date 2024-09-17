const apiKey = "ffe85d3db3dcdf61a516106d734ab21c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=zocca";

const imgSrc = document.querySelector(".rain-img");


(async function checkWheather(){
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp h1").innerText = data.main.temp;
    document.querySelector(".humidity").innerText = data.main.humidity;
    document.querySelector(".wind").innerText = data.wind.speed;
})();










