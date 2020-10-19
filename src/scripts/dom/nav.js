const nav = (projects) => {
  const el = document.createElement('nav');
  const section = document.createElement('section');

  const h2 = document.createElement('h2');
  h2.textContent = 'Projects';

  const addBtn = document.createElement('span');
  addBtn.className = 'fas fa-plus fas-vert-align';

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
  section.appendChild(addBtn);

  el.appendChild(section);
  el.appendChild(projectsList);

  const render = () => {
    const contentCont = document.querySelector('#content');
    contentCont.appendChild(el);
  }

  return { 
    el,
    render
  }
}

export { nav }