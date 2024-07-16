document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();  // Trim whitespace from the input
        if (!taskText) {
            alert('Please enter a task');  // Alert if the input is empty
            return;
        }

        // Create a new list item element
        const li = document.createElement('li');
        li.textContent = taskText;  // Set text content to the entered task

        // Create a new button for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';  // Set button text
        removeBtn.className = 'remove-btn';  // Assign class for styling

        // Add an event listener to the remove button for the removal functionality
        removeBtn.onclick = function() {
            li.remove();  // Remove the list item from the DOM when clicked
        };

        // Append the remove button to the list item
        li.appendChild(removeBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the task input field after the task is added
        taskInput.value = '';
    }

    // Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for adding a task with the 'Enter' key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();  // Trigger addTask function when Enter is pressed
        }
    });
});


