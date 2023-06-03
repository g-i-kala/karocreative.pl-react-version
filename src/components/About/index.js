import AnimateLetters from '../AnimateLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons'
import Loader from '../Loader'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);
    
    return (
        <>
            <div className='container content__wrapper about-page'>
                    <div className='text-zone'>
                        <h1 className='h1-name'>
                            <AnimateLetters letterClass={letterClass} 
                            strArray={['A','b','o','u','t',' _ ','m','e']}
                            idx={20} />
                            
                        </h1>
                        <p className='text-about'> I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging projects.
                        </p>
                        <p className='text-about'> With my quiet confidence and natural curiosity, I approach each task with a strong work ethic and a commitment to delivering high-quality results. This drives me to overcome any challenges that come my way, ensuring success every time.
                        </p>
                        
                    </div>
                <div className='stagecube-container'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#032326'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color='#032326'/>
                        </div>
                        <div className='face3'>                     
                            <FontAwesomeIcon icon={faJsSquare} color='#032326'/>
                        </div>
                        <div className='face6'>    
                            <FontAwesomeIcon icon={faReact} color='#032326'/>
                        </div>
                        <div className='face5'>    
                            <FontAwesomeIcon icon={faGitAlt} color='#032326'/>
                        </div>
                        <div className='face4'>    
                            <FontAwesomeIcon icon={faWordpress} color='#032326'/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader />
        </>
    
    
    
    )
}

export default About




