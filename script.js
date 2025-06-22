document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addButton = document.getElementById('add-task-btn');

    // ✅ Load tasks on page load
    loadTasks();

    // ✅ Event: click on "Add Task" button
    addButton.addEventListener('click', addTask);

    // ✅ Event: press "Enter" key in input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // ✅ Function to add a new task
    function addTask(taskText = null, save = true) {
        const text = taskText !== null ? taskText.trim() : taskInput.value.trim();

        if (text === '') {
            alert("Please enter a task.");
            return;
        }

        // Create <li> and set text
        const li = document.createElement('li');
        li.textContent = text;

        // Create "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        // Add click to remove task and update storage
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            removeTaskFromStorage(text);
        };

        // Append button to <li>, and <li> to <ul>
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        if (taskText === null) {
            taskInput.value = '';
        }

        // Save to Local Storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(text);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // ✅ Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(task => addTask(task, false));
    }

    // ✅ Remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
});
