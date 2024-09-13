function walkDog(){
    setTimeout(()=>{
        console.log("Dog walking is completed.");
    },4000);
}

function cleanKitchen(){
    setTimeout(()=>{
        console.log("kitchen is cleaned");
    },4000);
}

walkDog(()=>{
    cleanKitchen(()=> console.log("everything is perfect!"));
})