const Storage = () => {

  const getProjects = () => JSON.parse(localStorage.getItem('projects'));

  const getProject = (id) => {
    const projects = getProjects();
    projects.forEach(project => {
      if (project.getId() === id) return project;
    });
    return null;
  }

  const getTodos = (projectId) => {
    const projects = getProjects();
    projects.forEach(project => {
      if (project.getId() === projectId) {
        return project.getTodos();
      }
    });
    return null;
  }

  const getTodo = (projectId, todoId) => {
    const projects = getProjects();
    projects.forEach(project => {
      if (project.getId() === projectId) {
        const todos = project.getTodos();
        for (let todo in todos) {
          if (todo.id === todoId) { return todo }
        }
        return null;
      }
    });
    return null;
  }

  const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  return {
    getProjects,
    getProject,
    getTodos,
    getTodo,
    saveProjects
  }
}

export { Storage }