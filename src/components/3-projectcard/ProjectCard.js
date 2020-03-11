import React from 'react';
import './ProjectCard.scss';
import Github from '../../images/github_black.png';
import Deploy from '../../images/deploy.png';
import Fade from 'react-reveal/Fade';

const ProjectCard = ({project}) => {

  const renderTechStack = () => {
    return project.techStack.map(tech =>
      <p className='techStack' key={tech + '1'}>{tech}</p> )
  }

  return (
      <div className='wrapper-projectcard' key={project.id}>
        <Fade bottom>
          <article className='article-projectcard'>
            <img className='img-projectcard'
              src={project.img}
              alt='Harry Potter and the sorting game' />
            <div className='description-wrapper'>
                <h3 className='title-project'>{project.title}</h3>
                <p>Game to match witches and wizards to their respective Hogwarts house.</p>
                <ul>
                  {renderTechStack()}
                </ul>
              <footer className='footer-projectcard'>
                <a
                  className='icon-link'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={project.repo}>
                    <img className='projectcard-icon'
                      src={Github}
                      alt='github icon' />
                </a>
                <a
                  className='icon-link'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={project.deploy}>
                    <img className='projectcard-icon'
                      src={Deploy}
                      alt='github icon' />
                </a>
              </footer>
            </div>
          </article>
        </Fade>
      </div>
  );
}

export default ProjectCard;