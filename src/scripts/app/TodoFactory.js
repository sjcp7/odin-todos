const Todo = (id, title, description, deadline, priority, status='unchecked') => {
  return {
    id, 
    title,
    description,
    deadline,
    priority,
    status
  }
}

export { Todo }