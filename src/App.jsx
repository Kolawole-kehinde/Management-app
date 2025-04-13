// src/App.jsx
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
    setProjectState(prev => ({
      ...prev,
      selectedProjectId: null,
    }));
  };

  // Determine which content to render in the main area
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } 
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
};

export default App;
