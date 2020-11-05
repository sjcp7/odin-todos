const taskCard = (task) => {
  const card = document.createElement('div');
  card.classList.add('task-card');
  card.setAttribute('data-id', task.id);

  const section = document.createElement('section');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  if (task.status == 'checked') {
    checkbox.checked = true;
  }
  const title = document.createElement('h2');
  title.textContent = task.title;

  section.appendChild(checkbox);
  section.appendChild(title);

  const description = document.createElement('p');
  description.textContent = task.description;
  const deadline = document.createElement('h3');
  deadline.textContent = task.deadline;
  const priority = document.createElement('h3');
  priority.textContent = task.priority;

  const btns = document.createElement('div');

  const editBtn = document.createElement('i');
  editBtn.className = 'fas fa-edit fas-vert-align';
  const editBtnWrapper = document.createElement('span');
  editBtnWrapper.classList.add('edit-todo-btn');
  editBtnWrapper.appendChild(editBtn);

  const delBtn = document.createElement('i');
  delBtn.className = 'fas fa-trash-alt fas-vert-align';
  const delBtnWrapper = document.createElement('span');
  delBtnWrapper.classList.add('delete-todo-btn');
  delBtnWrapper.appendChild(delBtn);

  btns.appendChild(editBtnWrapper);
  btns.appendChild(delBtnWrapper);

  card.appendChild(section);
  card.appendChild(description);
  card.appendChild(deadline);
  card.appendChild(priority);
  card.appendChild(btns);

  return card;
}

export { taskCard }