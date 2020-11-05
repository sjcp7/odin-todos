const mainContainer = () => {
  const mainCont = document.createElement('main');
  return mainCont;
}

const tasksContainer = () => {
  const cont = document.createElement('div');
  cont.id = 'tasks-container';
  cont.classList.add('centered');
  return cont;
}

export {
  mainContainer,
  tasksContainer
}