let add = document.querySelector(".addBtn");
let textArea = document.querySelector(".textAreaa");
let text = document.querySelector(".taskBox-text");


const fun = () =>{
    add.addEventListener('click', ()=>{
        textArea.innerText = text.innerText;

    })
}