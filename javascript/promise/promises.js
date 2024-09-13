/*function walkDog(){
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
})*/ 

// The above code is executed without calling a callback or invoking
//due to this reason only first function will execute.

/*function walkDog(callback){
    setTimeout(()=>{
        console.log("Dog walking is completed.");
        callback();
    },4000);
}

function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("kitchen is cleaned");
        callback();
    },4000);
}

walkDog(()=>{
    cleanKitchen(()=> console.log("everything is perfect!"));
})*/

//This code used invoking the callback function

