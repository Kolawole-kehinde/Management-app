import React, { useState } from 'react';
import ProjectSidebar from './Components/ProjectSidebar';
import NewProject from './Components/NewProject';
import NoProjectSelected from './Components/NoProjectSelected';

const App = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // undefined = nothing selected, null = create mode
    projects: [],
  });

  // Handle "Create New Project" button click
  const handleStartAddProject = () => {
    // Update state to null to enter create mode
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleAddProject = (projectData) => {
    // Add the new project to the state
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: undefined, // Reset selected project ID
      projects: [...prevState.projects, projectData],
    }));
  };

  console.log(projectState)

  // Determine which content to render in the main area
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
      {content}
    </main>
  );
};

export default App;
