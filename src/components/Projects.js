import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";



function Projects(){

  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [updateProject, setUpdateProject] = useState(null);

  const handleNewProjectChange = (event) => {
    setNewProject(event.target.value);
  };

  const handleNewDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleAddProject = (event) => {
    event.preventDefault();
    if (newProject.trim() === '') {
      return;
    }
    setProjects((previousProjects) => [
      ...previousProjects,
      { name: newProject, description: newDescription },
    ]);
    setNewProject('');
    setNewDescription('');
  };

  const handleDeleteProject = (entry) => {
    setProjects((previousProjects) => previousProjects.filter((_, i) => i !== entry));
  };

  const handleEditProject = (entry) => {
    setUpdateProject(entry);
    setNewProject(projects[entry].name);
    setNewDescription(projects[entry].description);
  };

  const handleSaveProject = (entry) => {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[entry].name = newProject;
      updatedProjects[entry].description = newDescription;
      return updatedProjects;
    });
    setNewProject('');
    setNewDescription('');
    setUpdateProject(null);
  };

  return (
    <div>
      <Navbar/>
    <div className="form">
      <h2>My Projects</h2>
      <form onSubmit={handleAddProject}>
        <label htmlFor="new-project">Enter Project:</label>
        <input
          type="text"
          id="new-project"
          value={newProject}
          onChange={handleNewProjectChange}
        />
        <label htmlFor="new-description">Project Description:</label>
        <input
          type="text"
          id="new-description"
          value={newDescription}
          onChange={handleNewDescriptionChange}
        />
        <button type="submit">{updateProject !== null ? 'Save Project' : 'Add Project'}</button>
      </form>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project, entry) => (
            <li key={entry}>
              {updateProject === entry ? (
                <>
                  <input
                    type="text"
                    value={newProject}
                    onChange={handleNewProjectChange}
                  />
                  <input
                    type="text"
                    value={newDescription}
                    onChange={handleNewDescriptionChange}
                  />
                </>
              ) : (
                <>
                  <strong>{project.name}</strong>: {project.description}
                </>
              )}
              {updateProject === entry ? (
                <button onClick={() => setUpdateProject(null)}>Back</button>
              ) : (
                <>
                  <button onClick={() => handleEditProject(entry)}>Update</button>
                  <button onClick={() => handleDeleteProject(entry)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Add your projects here</p>
      )}
    </div>
  </div>
  );
    

}


export default Projects;