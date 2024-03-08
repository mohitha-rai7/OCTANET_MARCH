document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.tagName === 'SPAN') {
            event.target.parentNode.remove();
        } else if (event.target.tagName === 'LI') {
            event.target.classList.toggle('done');
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        todoList.appendChild(li);
        const span = document.createElement('span');
        span.textContent = '❌';
        li.appendChild(span);
    }
});
