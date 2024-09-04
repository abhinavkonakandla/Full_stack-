let btn1 = document.querySelector("#btn1");
let back = "light";

/*btn1.onclick =  ()=> {
    console.log('button was clicked');
    body.style.backgroundColor = "black";
};*/

btn1.addEventListener("mouseup",()=>{
    if(back === "light"){
        back ="dark";
        btn1.classList.add("dark");
        btn1.classList.remove("light");
    }else{
        back="light";
        btn1.classList.add("light");
        btn1.classList.remove("dark");
    }
    console.log(back);
});



