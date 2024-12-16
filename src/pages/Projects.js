import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Task Management App',
      description: 'Productivity tool with real-time collaboration features',
      technologies: ['React', 'Firebase', 'TypeScript']
    }
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;