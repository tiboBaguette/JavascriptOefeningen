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

let deleteTodo = function(todoList, text) {
    let item = todoList.find(function(todoList, index) {
        return todoList.text.toLowerCase() === text.toLowerCase()
    })
    if (todoList.indexOf(item) > -1) {
        todoList.splice(todoList.indexOf(item), 1)
    }
}

let getUncompletedTasks = function(todoList) {
    return todoList.filter(function(todo) {
        return todo.completed === false
    })
}

let sortTodoList = function(todoList) {
    todoList.sort(function(todoList) {
        if (todoList.completed === true) {
            return 1
        }
        return -1
    })
}

deleteTodo(todoList, 'todo2')
console.log(todoList)
console.log(getUncompletedTasks(todoList))
sortTodoList(todoList)
console.log(todoList)