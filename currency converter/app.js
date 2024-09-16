const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
const dropDowns = document.querySelectorAll(".dropdown select");

/*for(code in countryList){
    console.log(code);
}*/

for(let select of dropDowns){
    for(code in countryList){
        let newOption  = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        select.append(newOption);
    }
}

