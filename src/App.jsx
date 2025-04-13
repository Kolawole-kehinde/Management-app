// src/App.jsx
import React from 'react';
import ProjectSidebar from './Components/ProjectSidebar';
import NewProject from './Components/NewProject';
import NoProjectSelected from './Components/NoProjectSelected';

const App = () => {
  return (
    <main className='h-screen my-8 flex gap-8'>
        <ProjectSidebar/>
        {/* <NewProject/> */}
        <NoProjectSelected/>
    </main>
  );
};

export default App;
