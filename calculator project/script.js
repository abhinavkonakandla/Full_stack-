(function(){


    let screen = document.querySelector(".input-area");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");


    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = button.getAttribute("data-num");
            screen.value += value;
        });
    });

    

    equal.addEventListener('click', function() {
        if (screen.value !== "") {
            try {
                let result = eval(screen.value);  // Evaluate the expression
                screen.value = result;  // Display the result
            } catch (error) {
                screen.value = "Error";  // Handle invalid expressions
            }
        }
    });

    

    clear.addEventListener('click',function(e){
        screen.value="";
    })

})();