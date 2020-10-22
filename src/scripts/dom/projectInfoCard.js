const projectInfoCard = (projectName) => {
  const el = document.createElement('div');
  el.id = 'project-info-card';
  el.classList.add('centered');

  const h1 = document.createElement('h1');
  h1.textContent = projectName;

  const delBtn = document.createElement('i');
  delBtn.className = 'fas fa-trash-alt fas-vert-align';
  const delBtnWrapper = document.createElement('span');
  delBtnWrapper.appendChild(delBtn);

  el.appendChild(h1);
  el.appendChild(delBtnWrapper);
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