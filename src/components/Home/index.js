import { Link } from 'react-router-dom';
import './index.scss';
import '../../omni.scss';
import { useEffect, useState } from 'react';
import AnimateLetters from '../AnimateLetters';
import Loader from '../Loader'

const Home = () =>  {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['K','a','r','o','l','i','n','a']
    const jobArray = ['_','d','e','v','e','l','o','p','e','r',]


    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
        <div className='container content__wrapper home-page'>
            <div className='text-zone'>
                <h2>Hi, <br/> My name is</h2>
            
                    <h1 className='h1-name animate__animated animate__bounce'>
                        <AnimateLetters letterClass={letterClass} 
                        strArray={nameArray}
                        idx={15} />
                    </h1>
                <h2>I'm a front end &nbsp; 
                        <AnimateLetters letterClass={letterClass} 
                        strArray={jobArray}
                        idx={22} />
                    
                    
                    <br/> with strong engineering background.</h2>
                <p className='text-about'>I create the part of a website or web application that You as a user interact with directly. I design and build the user interface (UI), write code to implement UI designs, and create interactive features that enhance Your (aka user) experience.</p>
                <div className='backbutton__wrapper'><Link to='/contact' className='flat-button'>Contact Me</Link></div>
            </div>
           
        </div>
        <Loader />
        </>
    )
};

export default Home;
