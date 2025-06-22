document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add event listener for button click
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // ✅ Create <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // ✅ Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // ✅ Add onclick to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // ✅ Append remove button to li, then li to ul
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // ✅ Clear input field
        taskInput.value = '';
    }
});
