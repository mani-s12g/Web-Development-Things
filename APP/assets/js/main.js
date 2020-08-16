var button =document.getElementById('button');
var todos = document.querySelector('.todos');
var closeButtons = document.getElementsByClassName('close');

button.onclick = function () 
{
    var todo = document.getElementById('todoInput');
    var newTodo = document.createElement('div');
    newTodo.classList.add('todo');
    newTodo.innerHTML = `
    <button class="close">X</button>
    <div class="todoHeading"><p>${todo.value}</p></div>
    `;
    todos.appendChild(newTodo);
    todo.value = '';
    for (var i = 0; i < closeButtons.length; i++) 
    {
        var close = closeButtons[i];
        close.onclick = function () 
        {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

