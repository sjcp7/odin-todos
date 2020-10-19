const projectInfoCard = (projectName) => {
  const el = document.createElement('div');
  el.id = 'project-info-card';
  el.classList.add('centered');

  const h1 = document.createElement('h1');
  h1.textContent = projectName;

  const delBtn = document.createElement('span');
  delBtn.className = 'fas fa-trash-alt fas-vert-align';

  el.appendChild(h1);
  el.appendChild(delBtn);
  const render = () => {
    const mainCont = document.querySelector('main');
    mainCont.appendChild(el);
  }
  return {
    el,
    render
  }
}

export { projectInfoCard }