 const URL =  "https://api.thecatapi.com/v1/images/0XYvRd7oD";

const castPara = document.querySelector("#cast");
const btn = document.querySelector("#btn");

const getCats = async() =>{
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    castPara.innerText = data.breeds[0].description;
};

btn.addEventListener("click", getCats);



