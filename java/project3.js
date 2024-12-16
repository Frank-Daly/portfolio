addTaskBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);
    todoInput.value = '';
});
