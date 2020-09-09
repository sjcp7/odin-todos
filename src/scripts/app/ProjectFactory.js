const Project = (id, name, todos) => {
  const _id = id;
  let _name = name;
  const _todos = todos;

  const getId = () => _id;
  const getName = () => _name;
  const getTodos = () => _todos;

  const renameProject = (newName) => { _name = newName }

  const addTodo = (todo) => {
    _todos.push(todo);
  }
  const removeTodo = (todoId) => {
    _todos.splice(todoId, 1);
  }

  return {
    getId,
    getName,
    getTodos,
    renameProject,
    addTodo,
    removeTodo
  }
}

export { Project }
