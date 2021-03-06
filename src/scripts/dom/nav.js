const nav = (projects) => {
  const el = document.createElement('nav');
  const section = document.createElement('section');

  const h2 = document.createElement('h2');
  h2.textContent = 'Projects';

  const addBtn = document.createElement('i');
  const addBtnWrappper = document.createElement('span');
  addBtn.className = 'fas fa-plus fas-vert-align';
  addBtnWrappper.appendChild(addBtn);

  const projectsList = document.createElement('ul');
  projectsList.classList.add('projects-list');

  if (projects.length > 0) {
    projects.forEach(project => {
      const item = document.createElement('li');
      item.textContent = project.name;
      item.setAttribute('data-id', project.id);
      projectsList.appendChild(item);
    });
  }

  section.appendChild(h2);
  section.appendChild(addBtnWrappper);

  el.appendChild(section);
  el.appendChild(projectsList);

  return el;  
}

export { nav }