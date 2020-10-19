const tasksBanner = () => {
  const section = document.createElement('section');
  section.id = 'tasks-banner';

  const h2 = document.createElement('h2');
  h2.textContent = 'Tasks';

  const addBtn = document.createElement('span');
  addBtn.className = 'fas fa-plus fas-vert-align';

  section.appendChild(h2);
  section.appendChild(addBtn);
  const render = () => {
    const tasksCont = document.querySelector('#tasks-container');
    tasksCont.appendChild(section);
  }
  return {
    section,
    render
  }
}

export { tasksBanner }