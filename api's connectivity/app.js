 const URL =  "https://api.thecatapi.com/v1/images/0XYvRd7oD";

const castPara = document.querySelector("#cast");
const btn = document.querySelector("#btn");

async function getCats(){
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    castPara.innerText = data.breeds[0].description;
};

/*function getCats(){
    fetch(URL)
    .then((result)=>{
        return result.json();
    })
    .then((value)=>{
        castPara.innerText = value.breeds[0].description;
    })
}*/




btn.addEventListener("click", getCats);



