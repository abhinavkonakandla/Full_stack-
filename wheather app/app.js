const apiKey = "ffe85d3db3dcdf61a516106d734ab21c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=india";

async function checkWheather(){
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    const data = await response.json();
}










