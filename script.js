const API = "http://localhost:5000/api/tasks";

const list = document.getElementById("taskList");

async function fetchTasks() {

    const res = await fetch(API);
    const tasks = await res.json();

    list.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");

        li.innerHTML = `
        ${task.title}
        <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        list.appendChild(li);

    });
}

async function addTask() {

    const input = document.getElementById("taskInput");

    await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({title:input.value})
    });

    input.value="";

    fetchTasks();
}

async function deleteTask(id){

    await fetch(API+"/"+id,{
        method:"DELETE"
    });

    fetchTasks();
}
function toggleTheme(){

document.body.classList.toggle("dark");

}
fetchTasks();