 const URL =  "https://api.thecatapi.com/v1/images/0XYvRd7oD";



const getCats = async ()=>{
    let response = await fetch(URL);
    console.log(response.status);
}