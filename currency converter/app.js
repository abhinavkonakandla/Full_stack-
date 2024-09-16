const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
const dropDowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
/*for(code in countryList){
    console.log(code);
}*/

for(let select of dropDowns){
    for(code in countryList){
        let newOption  = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if(select.value === "from" && code === "USD"){
            newOption.selected = "selected";
        }else if(select.value === "to" && code === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
        select.addEventListener('change', (evt)=>{
            updateFlag(evt.target)
        })
    }
}

const updateFlag = (element)=>{
    let code = element.value;
    let countryCode = countryList[code];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src  = newSrc;
}

btn.addEventListener('click',(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amVal = amount.value;
    if(amVal==""){
        alert("amount cannot be empty");
    }
    console.log(amVal);
})



