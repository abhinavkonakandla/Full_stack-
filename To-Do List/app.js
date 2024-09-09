let add = document.querySelector(".addBtn");
let tasks = document.querySelector(".tasks");
let text = document.querySelector(".taskBox-text");




add.addEventListener('click', ()=>{
    const taskValue = text.value.trim();
    
    if (taskValue === "") {
        alert("Please enter a task");
    } else {
        // Create a new element for the task
        const newTask = document.createElement('div');
        newTask.textContent = taskValue;
        
        // Append the task to the tasks container
        tasks.appendChild(newTask);
        
        // Clear the input field after adding the task
        text.value = "";
    }
})
