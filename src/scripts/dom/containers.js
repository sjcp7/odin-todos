import { tasksBanner } from "./tasksBanner";

const mainContainer = () => {
  const mainCont = document.createElement('main');
  const render = () => {
    const contentCont = document.querySelector('#content');
    contentCont.appendChild(mainCont);
  }
  return {
    mainCont,
    render
  }
}

const tasksContainer = () => {
  const cont = document.createElement('div');
  const banner = tasksBanner();
  cont.id = 'tasks-container';
  cont.classList.add('centered');
  const render = () => {
    const mainCont = document.querySelector('main');
    mainCont.appendChild(cont);
    banner.render();
  }
  return {
    cont,
    render
  }
}

export {
  mainContainer,
  tasksContainer
}