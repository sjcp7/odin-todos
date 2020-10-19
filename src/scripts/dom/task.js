const taskCard = (task) => {
  const card = document.createElement('div');
  card.classList.add('task-card');

  const section = document.createElement('section');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
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
  const editBtn = document.createElement('span');
  editBtn.className = 'fas fa-edit fas-vert-align';
  const delBtn = document.createElement('span');
  delBtn.className = 'fas fa-trash-alt fas-vert-align';

  btns.appendChild(editBtn);
  btns.appendChild(delBtn);

  card.appendChild(section);
  card.appendChild(description);
  card.appendChild(deadline);
  card.appendChild(priority);
  card.appendChild(btns);
  const render = () => {
    const containerCont = document.querySelector('#tasks-container');
    containerCont.appendChild(card);
  }
  return {
    card,
    render
  };
}

export { taskCard }