function addTodo() {
        const input = document.getElementById('todoInput');
        if (input.value.trim() === "") return;

        todos.push(newTodo);
        input.value = "";
        render();
    }
    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        render();
    }

    function clearCompleted() {
        todos = todos.filter(todo => !todo.completed);
        render();
    }