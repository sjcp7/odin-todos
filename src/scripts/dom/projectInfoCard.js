const projectInfoCard = (projectName) => {
  const card = document.createElement('div');
  card.id = 'project-info-card';
  card.classList.add('centered');

  const h1 = document.createElement('h1');
  h1.textContent = projectName;

  const delBtn = document.createElement('i');
  delBtn.className = 'fas fa-trash-alt fas-vert-align';
  const delBtnWrapper = document.createElement('span');
  delBtnWrapper.appendChild(delBtn);

  card.appendChild(h1);
  card.appendChild(delBtnWrapper);
  
  return card;
}

export { projectInfoCard }