import { nav } from './nav';
import { mainContainer, tasksContainer } from './containers';
import { projectInfoCard as projCard } from './projectInfoCard';
import { tasksBanner } from './tasksBanner';
import { taskCard as task, taskCard } from './task';
import { newProject, editProject, newTodo, editTodo } from './modals';

import '@fortawesome/fontawesome-free/js/all';
import '../../css/index.css';
import { Controller } from '../app/Controller';

const displayController = () => {
  const app = Controller();
  const mainCont = mainContainer();
  const tasksCont = tasksContainer();
  const sidenav = nav(app.getProjects());
  let selectedProject = '';

  const start = () => {
    render();
    addEventListeners();
  }
  
  const render = () => {
    sidenav.render();
    mainCont.render();
    renderProjInfoCard();
    tasksCont.render();
    renderProjectTodos();
    renderModals();
  }

  const renderProjInfoCard = () => {
    if (selectedProject == '') {
      const projects = app.getProjects();
      const firstProject = projects[0];
      selectedProject = firstProject.id;
      const card = projCard(firstProject.name);
      card.render();
    }
    else {
      const project = app.getProject(selectedProject);
      const card = projCard(project.name);
      card.render();
    }
  }

  const renderProjectTodos = () => {
    const project = app.getProject(selectedProject);
    const todos = project.todos;
    todos.forEach(todo => {
      const todoCard = taskCard(todo);
      todoCard.render();
    });
  }

  const renderModals = () => {
    const newProjModal = newProject();
    const editProjModal = editProject();
    const newTodoModal = newTodo();
    const editTodoModal = editTodo();

    newProjModal.render();
    editProjModal.render();
    newTodoModal.render();
    editTodoModal.render();
  }

  const addEventListeners = () => {
    const newProjectBtn = document.querySelector('nav section .fas-vert-align path');
    const deleteProjectBtn = document.querySelector('#project-info-card span');
    const newTaskBtn = document.querySelector('#tasks-banner span');
    console.log(newProjectBtn);
    newProjectBtn.addEventListener('click', () => {
      const newProjectModal = document.querySelector('.new-project-modal');
      console.log(newProjectBtn)
      newProjectModal.classList.add('visible');
    })
  }

  

  
  return {
    start
  }  
}

export { displayController }