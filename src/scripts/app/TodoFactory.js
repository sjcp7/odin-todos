const Todo = (id, title, description, deadline, priority) => {
  const _id = id;
  let _title = title;
  let _description = description;
  let _deadline = deadline;
  let _priority = priority;

  const getId = () => _id;
  const getTitle = () => _title;
  const getDescription = () => _description;
  const getDeadline = () => _deadline;
  const getPriority = () => _priority;

  const setTitle = (newTitle) => { _title = newTitle }
  const setDescription = (newDescription) => { _description = newDescription }
  const setDeadline = (newDeadline) => { _deadline = newDeadline }
  const setPriority = (newPriority) => { _priority = newPriority }

  return {
    getId,
    getTitle,
    getDescription,
    getDeadline,
    getPriority,
    setTitle,
    setDescription,
    setDeadline,
    setPriority
  }
}

export { Todo }