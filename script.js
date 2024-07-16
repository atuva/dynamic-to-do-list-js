document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Pass 'false' to avoid saving to Local Storage again
    }

    // Function to add tasks
    function addTask(taskText, save = true) {
        if (!taskText) {
            if (save) alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function() {
            li.remove();
            updateLocalStorage();
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) {
            updateLocalStorage();
        }

        taskInput.value = ''; // Clear the input field
    }

    // Function to update Local Storage
    function updateLocalStorage() {
        const tasks = Array.from(taskList.children).map(li => li.textContent.replace('Remove', '').trim());
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Attach event listeners
    addButton.addEventListener('click', () => addTask(taskInput.value.trim()));
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim());
        }
    });

    // Load tasks from Local Storage when page loads
    loadTasks();
});
