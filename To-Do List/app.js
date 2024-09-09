let add = document.querySelector(".addBtn");
let tasks = document.querySelector(".tasks");
let text = document.querySelector(".taskBox-text");




add.addEventListener('click', ()=>{
    const taskValue = text.value.trim();
    
    if (taskValue === "") {
        alert("Please enter a task");
    } else {
        const newTask = document.createElement('div');
        newTask.textContent = taskValue;
        newTask.classList.add('task-item'); // Adding class to the task
        
        // Optional: Add an image to the task (e.g., delete icon)
        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'https://img.icons8.com/?size=100&id=102350&format=png&color=000000'; // Replace with your image URL or path
        deleteIcon.alt = 'Delete';
        deleteIcon.classList.add('delete-btn'); // Adding class to the image

        // Append the delete icon to the task
        newTask.appendChild(deleteIcon);

        // Append the task to the tasks container
        tasks.appendChild(newTask);
        
        // Clear the input field after adding the task
        text.value = "";
       /* // Create a new element for the task
        const div = document.createElement("div");
        div.classList.add("task");

        const para = document.createElement('p');
        para.textContent = taskValue;
        tasks.append(para);

        const img = document.createElement('img');
        img.src = 'https://img.icons8.com/?size=100&id=102350&format=png&color=000000';
        img.alt = "Delete";
        img.classList.add('bin-img');

        div.appendChild(img);
        tasks.append(div);

        taskValue = " ";*/
    }
})
