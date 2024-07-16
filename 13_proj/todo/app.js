document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
            taskList.appendChild(li);
            taskInput.value = '';
            saveTasks();
        }
    }

    // Function to delete a task
    function deleteTask(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentElement.remove();
            saveTasks();
        }
    }

    // Function to save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(task => {
            tasks.push(task.firstChild.textContent.trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(taskText => {
                const li = document.createElement('li');
                li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
                taskList.appendChild(li);
            });
        }
    }

    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from localStorage on page load
    loadTasks();
});
