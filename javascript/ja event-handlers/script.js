let btn1 = document.querySelector("#btn1");
let btn = document.querySelector("button");
btn1.onclick =  ()=> {
    console.log('button was clicked');
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
};