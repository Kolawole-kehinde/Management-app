import React from 'react';
import Button from './Button';

const ProjectSidebar = ({ onStartAddProject, projects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-10 font-bold uppercase md:text-xl text-stone-50">Your Project</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
       <ul>
        {projects.map((project) => (
          <li key={project.id} className="my-4">
            <button className="w-full text-left px-2 py-1 rounded-b-sm my-1 text-stone-400 hover:bg-stone-800 hover:text-stone-200">{project.title}</button>
          </li>
        ))}
       </ul>
    </aside>
  );
};

export default ProjectSidebar;
