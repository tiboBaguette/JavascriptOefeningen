const todoList = [{
    text: 'todo1',
    completed: false,
}, {
    text: 'todo2',
    completed: false,
}, {
    text: 'todo3',
    completed: true,
}, {
    text: 'todo4',
    completed: false,
}, {
    text: 'todo5',
    completed: true,
}]

const filters = {
    searchText: '',
    hideCompleted: false,
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        if (filters.hideCompleted) {
            return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed)
        } else {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        }
    })

    // clear div
    document.querySelector('#todo-item-list').innerHTML = ''

    // get uncompleted todos and print amount in new <p>
    const uncompletedTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    })

    const newParagraph = document.createElement('h2')
    newParagraph.textContent = `You have ${uncompletedTodos.length} todos left`
    document.querySelector('#todo-item-list').appendChild(newParagraph)

    // print all todos in a new <p>
    filteredTodos.forEach(function(item) {
        const newParagraph = document.createElement('p')
        newParagraph.textContent = item.text
        document.querySelector('#todo-item-list').appendChild(newParagraph)
    })
}

const addTodo = function(text, status) {
    todoList.push({
        text: text,
        completed: status
    })
}

// render todos
renderTodos(todoList, filters)

// search input event listener
document.querySelector('#search-todo-input').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todoList, filters)
})

// add input event listener
document.querySelector('#form').addEventListener('submit', function(e) {
    e.preventDefault()
    addTodo(e.target.elements.addTodo.value, false)
    renderTodos(todoList, filters)
    e.target.elements.addTodo.value = ''
})

// hide completed checkbox event listener
document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todoList, filters)
})