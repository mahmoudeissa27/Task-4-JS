let storeTask = [];

for (let i = 0; i < 3; i++) {
    let taskName = prompt("What is your task name?");
    let taskType = prompt("What is your task type? (Task, In Progress, Done)");

    storeTask.push({
        name: taskName,
        type: taskType,
        dateee: new Date().toLocaleString()
    });
}

displayTasks();

function displayTasks() {
    const parent = document.getElementById("parent");
    parent.innerHTML = ""; 

    storeTask.forEach((task, index) => {
        let color = "";

        switch (task.type.toLowerCase()) {
            case "in progress":
                color = "orange";
                break;
            case "done":
                color = "green";
                break;
            case "task":
                color = "red";
                break;
            default:
                color = "gray";
        }

        parent.innerHTML += `
            <div style="background-color:${color}; padding:10px; margin:10px 0;" data-index="${index}">
                <strong>Task name:</strong> ${task.name}<br>
                <strong>Task type:</strong> ${task.type}<br>
                <strong>Task date:</strong> ${task.dateee}<br>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
    });

    attachEventListeners();
}

function attachEventListeners() {
    const allTasks = document.querySelectorAll("#parent > div");

    allTasks.forEach(taskDiv => {
        const index = taskDiv.getAttribute("data-index");

        taskDiv.querySelector(".edit-btn").addEventListener("click", () => {
            let newName = prompt("Enter new task name:", storeTask[index].name);
            let newType = prompt("Enter new task type (Task, In Progress, Done):", storeTask[index].type);

            if (newName && newType) {
                storeTask[index].name = newName;
                storeTask[index].type = newType;
                storeTask[index].dateee = new Date().toLocaleString();
                displayTasks();
            }
        });

        taskDiv.querySelector(".delete-btn").addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this task?")) {
                storeTask.splice(index, 1); // Remove from array
                displayTasks(); // Refresh display
            }
        });
    });
}

console.log("All Tasks:", storeTask);
alert(`Total tasks added: ${storeTask.length}`);
