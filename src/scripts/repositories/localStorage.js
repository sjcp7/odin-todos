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

  const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  return {
    getProjects,
    getProject,
    addProject
  }
}

export { Storage }