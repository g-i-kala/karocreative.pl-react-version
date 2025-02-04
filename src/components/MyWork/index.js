import React from 'react';
import ProjectCard from '../ProjectCard';
import { projectsData } from '../../data/projectsData';
import { useEffect, useState } from 'react';
import AnimateLetters from '../AnimateLetters';
import './index.scss';

const MyWork = () => {

    const [letterClass, setLetterClass]=useState('text-animate');
    const nameArray = ['M','y','_','w','o','r','k'];

    useEffect (()=>{
        const timeout = setTimeout(()=>{
            setLetterClass('text-animate-hover');
        },3000);
        return () => clearTimeout(timeout);
    },[]);

    return (
       <> 
       <div className='container mywork-page content__wrapper'>
            <div className='text-zone'>
                <h1 className='h1-name animate__animated animate__bounce'>
                    < AnimateLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                </h1>
                <div className='mywork__wrapper'>
            
                    <div className="list__work">

                        {projectsData.map((project) => (
                            <ProjectCard 
                                key={project.id}
                                title={project.title}
                                image={project.image}
                                liveUrl={project.liveUrl}
                                codeUrl={project.codeUrl}
                                description={project.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
       </div>
       </>
    )
}

export default MyWork;