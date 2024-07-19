document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    loadTasks();

    addButton.addEventListener("click", function() {
        addTask(taskInput.value.trim());
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask(taskInput.value.trim());
        }
    });

    function addTask(taskText, save = true) {
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener("click", function() {
            taskList.removeChild(li);
            updateLocalStorage();
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";

        // Save the new task to Local Storage
        if (save) {
            updateLocalStorage();
        }
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    function updateLocalStorage() {
        const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
