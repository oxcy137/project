let tasks = [];

document.addEventListener('DOMContentLoaded', () => {
    // Llamada inicial para cargar las tareas almacenadas al cargar la página
    loadTasksFromLocalStorage();
    displayTasks();
});

function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newTask = newTaskInput.value.trim();

    if (newTask !== '') {
        tasks.push(newTask);
        saveTasksToLocalStorage();
        displayTasks();
        newTaskInput.value = '';
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveTasksToLocalStorage();
    displayTasks();
}

function completeTask(index) {
    alert(`¡Tarea completada: ${tasks[index]}`);
    saveTasksToLocalStorage();
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = createTaskListItem(task, index);
        taskList.appendChild(listItem);
    });
}

function createTaskListItem(task, index) {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const removeButton = createButton('Eliminar', () => removeTask(index));
    const completeButton = createButton('Completar', () => completeTask(index));

    listItem.appendChild(removeButton);
    listItem.appendChild(completeButton);

    return listItem;
}

function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = onClick;
    return button;
}

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = storedTasks;
}



