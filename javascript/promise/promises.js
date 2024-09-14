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

/*function walkDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Dog walking is completed.");
        },1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Kitchen cleaning completed");
        },2500);
    });
}
function playWithDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("playing with dog completed");
        },500);
    })
}

walkDog().then(value=>{
    console.log(value);
    return cleanKitchen();
})
.then(value=>{
    console.log(value);
    return playWithDog();
})
.then(value => {
    console.log(value);
    return console.log("all works are done");
})
.catch(error=>{
    console.log(error);
})*/

// This above approach uses promises by .then() block and 
//.catch() method 

// The following code is Async-Await code.
// Easy to understand.
// Easy to find errors.

async function walkDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Dog walking is completed.")
            resolve("Success");
        },1500);
    });
}

async function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("kitchen cleaning completed");
            resolve("Success");
        },2500);
    });
}
async function playWithDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("playing with dog completed");
            resolve("Success");
        },500);
    })
}

/*async function getAll(){
    await walkDog();
    await cleanKitchen();
    await playWithDog();
}*/  /* This part of code needs an extra call to call this 
function.*/

(async function getAll(){
    await walkDog();
    await cleanKitchen();
    await playWithDog();
})(); //This is IIFE method. No need an extra call it automatically 
//executes all the instructions in it.
