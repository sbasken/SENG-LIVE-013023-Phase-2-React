import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, onLoadProjects }) {
  
  const [searchQuery, setSearchQuery] = useState("")

  const handleClick = () => {
    onLoadProjects();
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const searchResults = projects.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.about.toLowerCase().includes(searchQuery.toLowerCase());
  })

  const renderedProjects = searchResults.map(project => {
    return (
      <ProjectCard
        key={project.id}
        project={project}
      />
    )
  })
  

  return (
    <section>
      <button onClick={handleClick}>Load Projects</button>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />

      <ul className="cards">{renderedProjects}</ul>
    </section>
  );
};

export default ProjectList;