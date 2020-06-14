const Todo = require('./todo.js');

const todo = new Todo();
todo.add("task 1");
todo.add("task 2");
todo.add("task 3");

todo.getAll().forEach(task => {
    console.log(task);
});