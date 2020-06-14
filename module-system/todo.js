class Todo {
    tasks = [];
    constructor() {
    }

    add(name) {
        this.tasks.push(name);
    }

    getAll() {
        return this.tasks;
    }
}

module.exports = Todo;