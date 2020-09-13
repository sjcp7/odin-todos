const Project = (id, name, todos=[]) => {
  const _todos = todos;

  const addTodo = (todo) => {
    _todos.push(todo);
  }
  const removeTodo = (todoId) => {
    _todos.splice(todoId, 1);
  }

  return {
    id,
    name,
    _todos,
    addTodo,
    removeTodo
  }
}

export { Project }
