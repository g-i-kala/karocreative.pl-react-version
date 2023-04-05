import { useEffect, useState } from 'react';
import AnimateLetters from '../AnimateLetters';
import './index.scss'

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
                    
                    <div className="li__work">
                        <a href="https://wakethedead.eu" className="li__work__link" target="_blank">wakethedead.eu</a>
                        <ul className="li__work__spec">
                            <li>graphic design & logo design</li>
                            <li>prototype in Figma</li>
                            <li>responsive & accessible design</li>
                            <li>implemented & build using HTML5, CSS3 and JavaScript</li>
                            <li>SEO optimised & analitccs integrated </li>
                            <li>secure</li>
                        </ul>
                    </div> 

                    <div className="li__work">
                        <a href="https://karocreative.pl" className="li__work__link" target="_blank">karocreative.pl</a>
                        <ul className="li__work__spec">
                            <li>graphic design & logo design</li>
                            <li>prototype in Figma</li>
                            <li>responsive & accessible design</li>
                            <li>implemented & build using React, CSS3</li>
                            <li>secure</li>
                        </ul>
                    </div>
                    
                    <div className="li__work">
                        <a href="https://letgotohaveit.com" className="li__work__link" target="_blank">letgotohaveit.com</a>
                       <ul className="li__work__spec">
                            <li>graphic design & logo design</li>
                            <li>prototype in Figma</li>
                            <li>responsive & accessible design</li>
                            <li>implemented in Wordpress</li>
                            <li>build in Oxygen Builder </li>
                            <li>SEO optimised & analitccs integrated </li>
                            <li>secure</li>
                        </ul>
                    </div>
                    <div className="li__work">
                        <a href="https://kalafonia.com" className="li__work__link" target="_blank">kalafonia.com</a>
                        <ul className="li__work__spec">
                            <li>graphic design & logo design</li>
                            <li>prototype in Figma</li>
                            <li>responsive & accessible design</li>
                            <li>implemented in Wordpress</li>
                            <li>build in Oxygen Builder </li>
                            <li>SEO optimised & analitccs integrated </li>
                            <li>secure</li>
                        </ul>
                    </div>
                            
                </div>
            
                </div>
            </div>
       </div>
       </>
    )
}

export default MyWork;