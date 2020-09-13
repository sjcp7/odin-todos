const Project = (id, name, todos=[]) => {
  const addTodo = (todo) => {
    todos.push(todo);
  }
  const removeTodo = (todoId) => {
    todos.splice(todoId, 1);
  }

  return {
    id,
    name,
    todos,
    addTodo,
    removeTodo
  }
}

export { Project }
