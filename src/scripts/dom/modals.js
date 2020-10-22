const newProject = () => {
  const modal = document.createElement('div');
  modal.className = 'modal project-modal new-project-modal';
  const section = document.createElement('section');
  const div = document.createElement('div');

  const closeBtn = document.createElement('i');
  closeBtn.className = 'close fas fa-times fas-vert-align';
  const closeBtnWrapper = document.createElement('span');
  closeBtnWrapper.appendChild(closeBtn);

  const h4 = document.createElement('h4');
  h4.textContent = 'New Project';

  div.appendChild(closeBtnWrapper);
  div.appendChild(h4);

  const form = document.createElement('form');
  const label = document.createElement('label');
  label.setAttribute('for', 'project-title');
  label.textContent = 'Title';
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.id = 'project-title';
  const btn = document.createElement('button');
  btn.textContent = 'Add';

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(btn);

  section.appendChild(div);
  section.appendChild(form);

  modal.appendChild(section);

  const render = () => {
    const contentCont = document.querySelector('#content');
    contentCont.appendChild(modal);
  }

  return {
    modal,
    render
  }
}

const editProject = () => {
  const modal = document.createElement('div');
  modal.className = 'modal project-modal edit-project-modal';
  const section = document.createElement('section');
  const div = document.createElement('div');
  
  const closeBtn = document.createElement('i');
  closeBtn.className = 'close fas fa-times fas-vert-align';
  const closeBtnWrapper = document.createElement('span');
  closeBtnWrapper.appendChild(closeBtn); 

  const h4 = document.createElement('h4');
  h4.textContent = 'Edit Project';

  div.appendChild(closeBtnWrapper);
  div.appendChild(h4);

  const form = document.createElement('form');
  const label = document.createElement('label');
  label.setAttribute('for', 'edit-project-title');
  label.textContent = 'Title';
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.id = 'edit-project-title';
  const btn = document.createElement('button');
  btn.textContent = 'Confirm';

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(btn);

  section.appendChild(div);
  section.appendChild(form);

  modal.appendChild(section);
  const render = () => {
    const contentCont = document.querySelector('#content');
    contentCont.appendChild(modal);
  }

  return {
    modal,
    render
  }
}

const newTodo = () => {
  const modal = document.createElement('div');
  modal.className = 'modal todo-modal new-todo-modal';
  const section = document.createElement('section');
  
  const div = document.createElement('div');

  const closeBtn = document.createElement('i');
  closeBtn.className = 'close fas fa-times fas-vert-align'; 
  const closeBtnWrapper = document.createElement('span');
  closeBtnWrapper.appendChild(closeBtn);

  const h4 = document.createElement('h4');
  h4.textContent = 'New Todo';

  div.appendChild(closeBtnWrapper);
  div.appendChild(h4);

  const form = document.createElement('form');

  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'todo-title');
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.id = 'todo-title';
  titleInput.setAttribute('name', 'todo-title');

  const descLabel = document.createElement('label');
  descLabel.setAttribute('for', 'todo-description');
  descLabel.textContent = 'Description';
  const textarea = document.createElement('textarea');
  textarea.setAttribute('name', 'todo-description');
  textarea.id = 'todo-description';
  textarea.setAttribute('cols', '30');
  textarea.setAttribute('rows', '3');

  const deadlineLabel = document.createElement('label');
  deadlineLabel.setAttribute('for', 'todo-deadline');
  deadlineLabel.textContent = 'Deadline';
  const deadline = document.createElement('input');
  deadline.setAttribute('type', 'date');
  deadline.id = 'todo-deadline';
  deadline.setAttribute('name', 'todo-deadline');

  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'todo-priority');
  priorityLabel.textContent = 'Priority';

  const cmb = document.createElement('select');
  cmb.setAttribute('name', 'todo-priority');
  cmb.id = 'todo-priority';
  const lowPri = document.createElement('option');
  lowPri.setAttribute('value', 'low');
  const medPri = document.createElement('option');
  medPri.setAttribute('value', 'medium'); 
  const highPri = document.createElement('option');
  highPri.setAttribute('value', 'high');
  
  cmb.appendChild(lowPri);
  cmb.appendChild(medPri);
  cmb.appendChild(highPri);

  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add';

  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descLabel);
  form.appendChild(textarea);
  form.appendChild(deadlineLabel);
  form.appendChild(deadline);
  form.appendChild(priorityLabel);
  form.appendChild(cmb);
  form.appendChild(addBtn);

  section.appendChild(div);
  section.appendChild(form);
  
  modal.appendChild(section);
  const render = () => {
    const contentCont = document.querySelector('#content');
    contentCont.appendChild(modal);
  }

  return {
    modal,
    render
  }
}

const editTodo = () => {
  const modal = document.createElement('div');
  modal.className = 'modal todo-modal edit-todo-modal';
  const section = document.createElement('section');
  
  const div = document.createElement('div');

  const closeBtn = document.createElement('i');
  closeBtn.className = 'close fas fa-times fas-vert-align';
  const closeBtnWrapper = document.createElement('span');
  closeBtnWrapper.appendChild(closeBtn);

  const h4 = document.createElement('h4');
  h4.textContent = 'Edit Todo';

  div.appendChild(closeBtnWrapper);
  div.appendChild(h4);

  const form = document.createElement('form');

  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'edit-todo-title');
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.id = 'edit-todo-title';
  titleInput.setAttribute('name', 'edit-todo-title');

  const descLabel = document.createElement('label');
  descLabel.setAttribute('for', 'edit-todo-description');
  descLabel.textContent = 'Description';
  const textarea = document.createElement('textarea');
  textarea.setAttribute('name', 'edit-todo-description');
  textarea.id = 'edit-todo-description';
  textarea.setAttribute('cols', '30');
  textarea.setAttribute('rows', '3');

  const deadlineLabel = document.createElement('label');
  deadlineLabel.setAttribute('for', 'edit-todo-deadline');
  deadlineLabel.textContent = 'Deadline';
  const deadline = document.createElement('input');
  deadline.setAttribute('type', 'date');
  deadline.id = 'edit-todo-deadline';
  deadline.setAttribute('name', 'edit-todo-deadline');

  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'edit-todo-priority');
  priorityLabel.textContent = 'Priority';

  const cmb = document.createElement('select');
  cmb.setAttribute('name', 'edit-todo-priority');
  cmb.id = 'edit-todo-priority';
  const lowPri = document.createElement('option');
  lowPri.setAttribute('value', 'low');
  const medPri = document.createElement('option');
  medPri.setAttribute('value', 'medium'); 
  const highPri = document.createElement('option');
  highPri.setAttribute('value', 'high');
  
  cmb.appendChild(lowPri);
  cmb.appendChild(medPri);
  cmb.appendChild(highPri);

  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = 'Confirm';

  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descLabel);
  form.appendChild(textarea);
  form.appendChild(deadlineLabel);
  form.appendChild(deadline);
  form.appendChild(priorityLabel);
  form.appendChild(cmb);
  form.appendChild(confirmBtn);

  section.appendChild(div);
  section.appendChild(form);
  
  modal.appendChild(section);
  const render = () => {
    const contentCont = document.querySelector('#content');
    contentCont.appendChild(modal);
  }

  return {
    modal,
    render
  }
}

export {
  newProject,
  editProject,
  newTodo,
  editTodo
}