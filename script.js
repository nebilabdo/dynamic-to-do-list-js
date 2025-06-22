document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addButton = document.getElementById('add-task-btn');

    // ✅ Attach event listener to Add Button
    addButton.addEventListener('click', addTask);

    // ✅ Attach event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // ✅ Define addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // ✅ Create new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // ✅ Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn"); // ✔️ Use classList.add()

        // ✅ Add onclick to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // ✅ Append button to li, and li to ul
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // ✅ Clear input field
        taskInput.value = "";
    }
});
