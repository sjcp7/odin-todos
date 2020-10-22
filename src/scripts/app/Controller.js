import { Project } from './ProjectFactory';
import { Todo } from './TodoFactory';
import { Storage } from '../repositories/localStorage';
import { v4 as uuid } from 'uuid';

const Controller = () => {

  const db = Storage();
  const defaultTodo = Todo(uuid(), 'My Todo', 'This is my todo', '2020-10-19', 'high', 'unchecked');
  const defaultProject = Project(uuid(), 'Default', [defaultTodo]);

  if (db.getProjects().length == 0) db.addProject(defaultProject);

  const getProjects = () => db.getProjects();

  const getProject = (id) => db.getProject(id);

  const newProject = (id, name, todos=[]) => Project(id, name, todos);

  const newTodo = (id, title, description, deadline, priority) => Todo(id, title, description, deadline, priority);

  const saveProjects = (projects) => db.saveProjects(projects);
  
  return {
    getProjects,
    getProject,
    newProject,
    newTodo,
    saveProjects
  }
}

export { Controller }