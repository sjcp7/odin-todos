import { nav } from './nav';
import { mainContainer, tasksContainer } from './containers';
import { projectInfoCard } from './projectInfoCard';
import { tasksBanner } from './tasksBanner';
import { taskCard } from './task';
import { newProject, editProject, newTodo, editTodo } from './modals';

import '@fortawesome/fontawesome-free/js/all';
import '../../css/index.css';
import { v4 as uuid } from 'uuid';
import { Controller } from '../app/Controller';


const displayController = () => {
  const app = Controller();
  const rootElement = document.querySelector('#content');
  let selectedProject = '';

  const start = () => {
    render();
    addEventListeners();
  }
  
  const render = () => {
    const renderSidenav = () => {
      const sidenav = nav(app.getProjects());
      rootElement.appendChild(sidenav);
    }

    const renderMainContainer = () => {
      const mainCont = mainContainer();
      rootElement.appendChild(mainCont);
    }

    const renderProjectInfoCard = () => {
      if (selectedProject == '') {
        const defaultProject = app.getProjects()[0];
        selectedProject = defaultProject.id;
      }
      const project = app.getProject(selectedProject);
      const card = projectInfoCard(project.name);
      const mainCont = document.querySelector('main');
      mainCont.appendChild(card);
    }

    const renderTasksContainer = () => {
      const tasksCont = tasksContainer();
      const mainCont = document.querySelector('main');
      mainCont.appendChild(tasksCont);
    }

    const renderTasksBanner = () => {
      const banner = tasksBanner();
      const mainCont = document.querySelector('main');
      mainCont.appendChild(banner);
    }

    const renderProjectTodos = () => {
      const project = app.getProject(selectedProject);
      const todos = project.todos;
      const tasksCont = document.querySelector('#tasks-container');
      todos.forEach(todo => {
        const todoCard = taskCard(todo);
        tasksCont.appendChild(todoCard);
      });
    }

    const renderModals = () => {
      const newProjModal = newProject();
      const editProjModal = editProject();
      const newTodoModal = newTodo();
      const editTodoModal = editTodo();

      rootElement.appendChild(newProjModal);
      rootElement.appendChild(editProjModal);
      rootElement.appendChild(newTodoModal);
      rootElement.appendChild(editTodoModal);
    }

    rootElement.innerHTML = '';
    renderSidenav();
    renderMainContainer();
    renderProjectInfoCard();
    renderTasksBanner();
    renderTasksContainer();
    renderProjectTodos();
    renderModals();
  }


  const addEventListeners = () => {
    const projects = document.querySelectorAll('.projects-list li');

    const openNewProjectModalBtn = document.querySelector('nav section span');
    const addNewProjectBtn = document.querySelector('.new-project-modal button');
    const deleteProjectBtn = document.querySelector('#project-info-card span');

    const openNewTodoModalBtn = document.querySelector('#tasks-banner span');
    const addNewTodoBtn = document.querySelector('.new-todo-modal button');

    const openEditTodoModalBtns = document.querySelectorAll('.task-card .edit-todo-btn');
    const editTodoBtn = document.querySelector('.edit-todo-modal button');
    const deleteTodoBtns = document.querySelectorAll('.task-card .delete-todo-btn');

    const closeModalBtns = document.querySelectorAll('.modal section div span');

    const todoCheckboxes = document.querySelectorAll('input[type=checkbox]');

    projects.forEach(project => {
      project.addEventListener('click', (e) => {
        selectedProject = e.target.dataset.id;
        start();
      })
    })


    openNewProjectModalBtn.addEventListener('click', () => {
      const newProjectModal = document.querySelector('.new-project-modal');
      newProjectModal.classList.add('visible');
    });

    openNewTodoModalBtn.addEventListener('click', () => {
      const newTaskModal = document.querySelector('.new-todo-modal');
      newTaskModal.classList.add('visible');
    })

    openEditTodoModalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const editTodoModal = document.querySelector('.edit-todo-modal');
        let todoCard;
        if (e.target.tagName == 'svg') {
          todoCard = e.target.parentElement.parentElement.parentElement;
        }
        else if (e.target.tagName == 'path') {
          todoCard = e.target.parentElement.parentElement.parentElement.parentElement;
        }
        let todoId = todoCard.dataset.id;
        editTodoModal.setAttribute('data-id', todoId);
        let todo = app.getTodo(selectedProject, todoId);
        document.querySelector('#edit-todo-title').value = todo.title;
        document.querySelector('#edit-todo-description').value = todo.description;
        document.querySelector('#edit-todo-deadline').value = todo.deadline;
        document.querySelector(`#edit-todo-priority option[value=${todo.priority}]`).setAttribute('selected', 'selected');
        editTodoModal.classList.add('visible');
      })
    })

    addNewProjectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const input = document.querySelector('.new-project-modal input');
      const newProjectName = input.value;
      const newProject = app.newProject(uuid(), newProjectName);
      app.addProject(newProject);
      selectedProject = newProject.id;
      start();
    })



    addNewTodoBtn.addEventListener('click', e => {
      e.preventDefault();
      const todoTitle = document.querySelector('#todo-title').value;
      const todoDescription = document.querySelector('#todo-description').value;
      const todoDeadline = document.querySelector('#todo-deadline').value;
      const todoPriority = document.querySelector('#todo-priority').value;
      
      const newTodo = app.newTodo(uuid(), todoTitle, todoDescription, todoDeadline, todoPriority);
      const project = app.getProject(selectedProject);
      project.todos.push(newTodo);
      app.saveProject(project);
      start();
    })

    editTodoBtn.addEventListener('click', e => {
      e.preventDefault();
      const todoId = e.target.parentElement.parentElement.parentElement.dataset.id;
      const todo = app.getTodo(selectedProject, todoId);
      todo.title = document.querySelector('#edit-todo-title').value;
      todo.description = document.querySelector('#edit-todo-description').value;
      todo.deadline = document.querySelector('#edit-todo-deadline').value;
      todo.priority = document.querySelector('#edit-todo-priority').value;

      app.saveTodo(selectedProject, todo);      
      start();
    })

    closeModalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const modalElement = btn.parentElement.parentElement.parentElement;
        modalElement.classList.remove('visible');
      })
    })

    deleteProjectBtn.addEventListener('click', () => {
      const projects = app.getProjects();
      let newSelectedProject = '';
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].id == selectedProject) {
          if (i == 0) { 
            newSelectedProject = projects[i + 1].id;
          }
          else { 
            newSelectedProject = projects[i - 1].id;
          }
          app.deleteProject(projects[i].id);
        }
      }
      selectedProject = newSelectedProject;
      start();
    })


    deleteTodoBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        let todoCard;
        if (e.target.tagName == 'svg') {
          todoCard = e.target.parentElement.parentElement.parentElement;
        }
        else if (e.target.tagName == 'path') {
          todoCard = e.target.parentElement.parentElement.parentElement.parentElement;
        }

        const todoId = todoCard.dataset.id;
        app.deleteTodo(selectedProject, todoId);
        start();
      })
    })

    todoCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('click', e => {
        const todoId = e.target.parentElement.parentElement.dataset.id;
        const todo = app.getTodo(selectedProject, todoId);
        if (e.target.checked == true) {
          todo.status = 'checked';
        }
        else if (e.target.checked == false) {
          todo.status = 'unchecked';
        }

        app.saveTodo(selectedProject, todo);
        start();
      })
    })

  }

 
  return {
    start
  }  
}

export { displayController }