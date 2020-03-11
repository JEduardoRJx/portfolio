import React from 'react';
import './ProjectCard.scss';
import Github from '../../images/github_black.png';
import Deploy from '../../images/deploy.png';
import Fade from 'react-reveal/Fade';

const ProjectCard = ({project}) => {



  return (
      <div className='wrapper-projectcard' key={project.id}>
        
        <Fade bottom>
          <article className='article-projectcard'>
            
          </article>
        </Fade>

      </div>
  );
}

export default ProjectCard;