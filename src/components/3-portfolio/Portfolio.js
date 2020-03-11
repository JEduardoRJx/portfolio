import React from 'react';
import './Portfolio.scss';
import ProjectCard from '../3-projectcard/ProjectCard';
import { Projects } from './ProjectData';

const Portfolio = () => {

  const renderProjects = () => {
    return Projects.map(project =>
    <ProjectCard project={project} key={project.id}/>)
  }

  return (
    <section className='portfolio-section'>
      {renderProjects()}
    </section>
  );
}

export default Portfolio;