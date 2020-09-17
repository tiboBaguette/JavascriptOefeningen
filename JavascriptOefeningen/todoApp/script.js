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

// get uncompleted todos and print amount in new <p>
let uncompletedCount = 0
todoList.forEach(function(item) {
    if (!item.completed) {
        uncompletedCount++
    }
})

const newParagraph = document.createElement('h2')
newParagraph.textContent = `You have ${uncompletedCount} todos left`
document.querySelector('body').appendChild(newParagraph)

// print all todos in a new <p>
todoList.forEach(function(item) {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = item.text
    document.querySelector('body').appendChild(newParagraph)
})


// button onClickListener
document.querySelector('button').addEventListener('click', function(e) {
    console.log('Did this work?')
})