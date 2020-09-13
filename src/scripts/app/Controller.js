import { Project } from './ProjectFactory';
import { Todo } from './TodoFactory';
import { Storage } from '../repositories/localStorage';


const Controller = () => {

  const db = Storage();

  const getProjects = () => db.getProjects();

  const newProject = (id, name, todos=[]) => Project(id, name, todos);

  const newTodo = (id, title, description, deadline, priority) => Todo(id, title, description, deadline, priority);
  
  const saveProjects = (projects) => db.saveProjects(projects);

  return {
    getProjects,
    newProject,
    newTodo,
    saveProjects,
  }
}

export { Controller }