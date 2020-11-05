const Storage = () => {

  const getProjects = () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    if (projects == null) return [];
    return projects;
  };

  const getProject = (id) => {
    const projects = getProjects();
    let project;
    projects.forEach(proj => {
      if (proj.id == id) {
        project = proj;
      }
    })
    return project;    
  }

  const addProject = (project) => {
    const projects = getProjects();
    projects.push(project);
    saveProjects(projects);
  }

  const saveProject = (project) => {
    const projects = getProjects();
    projects.forEach(proj => {
      if (proj.id == project.id) {
        proj.name = project.name;
        proj.todos = project.todos;
      }
    })
    saveProjects(projects);
  }

  const deleteProject = (id) => {
    const projects = getProjects();
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id == id) {
        projects.splice(i, 1);
      }
    }
    saveProjects(projects);
  }

  const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  const getTodo = (projectId, todoId) => {
    const projectTodos = getProject(projectId).todos;
    let todo = {};
    projectTodos.forEach(projectTodo => {
      if (projectTodo.id == todoId) {
        todo = projectTodo;
      }
    })

    return todo;
  }

  const saveTodo = (projectId, todo) => {
    const project = getProject(projectId);
    project.todos.forEach(projTodo => {
      if (projTodo.id == todo.id) {
        projTodo.title = todo.title;
        projTodo.description = todo.description;
        projTodo.deadline = todo.deadline;
        projTodo.priority = todo.priority;
        projTodo.status = todo.status;
      }
    })    
    saveProject(project);
  }

  const deleteTodo = (projectId, todoId) => {
    const project = getProject(projectId);
    for (let i = 0; i < project.todos.length; i++) {
      if (project.todos[i].id == todoId) {
        project.todos.splice(i, 1);
      }
    }
    saveProject(project);
  }

  return {
    getProjects,
    getProject,
    addProject,
    saveProjects,
    saveProject,
    deleteProject,
    getTodo,
    saveTodo,
    deleteTodo
  }
}

export { Storage }