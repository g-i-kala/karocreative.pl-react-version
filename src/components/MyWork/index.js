import { useEffect, useState } from 'react';
import AnimateLetters from '../AnimateLetters';
import './index.scss';
import { screen_wtd, screen_kalafonia, screen_lgth, screen_caro, screen_jxd, screen_rf, screen_kc} from "../../assets/images";

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
                        <div className='li_work_img'>
                            <a href="https://karocreative.pl/designer-portfolio" className="li__work__link" 
                                target="_blank" rel="noreferrer">
                                <img src={screen_kc} alt="screenshot karocreative" className='screen_img'/>
                            </a>
                        </div>
                        <div className='li_work_text'>
                            <a href="https://karocreative.pl/designer-portfolio" className="li__work__link" target="_blank" rel="noreferrer">
                                karocreative desinger portfolio
                                </a>
                                <ul className="li__work__spec">
                                    <li>graphic design & logo design</li>
                                    <li>responsive & accessible design</li>
                                    <li>implemented in Wordpress</li>
                                    <li>build in Oxygen Builder </li>
                                    <li>SEO optimised & analitccs integrated </li>
                                    <li>secure</li>
                            </ul>
                            {/*<p>react mockup</p>
                            <div className='backbutton__wrapper'>
                                <a href='https://github.com/g-i-kala/karocreative.pl-react-version' 
                                rel="noreferrer"
                                target='_blank'
                                className='flat-button'>
                                Code
                                </a> 
                                 
                            </div>*/}
                        </div>
                    </div>
                    
                    
                    <div className="li__work">
                        <div className='li_work_img'>
                            <a href="https://reikiflow.pl" className="li__work__link" 
                                target="_blank" rel="noreferrer">
                                <img src={screen_rf} alt="screenshot reikiflow" className='screen_img'/>
                            </a>
                        </div>
                        <div className='li_work_text'>
                            <a href="https://reikiflow.pl" className="li__work__link" target="_blank" rel="noreferrer">
                                reikiflow.pl
                                </a>
                                <ul className="li__work__spec">
                                    <li>graphic design & logo design</li>
                                    <li>prototype in Figma</li>
                                    <li>responsive & accessible design</li>
                                    <li>implemented in Wordpress</li>
                                    <li>build in Oxygen Builder </li>
                                    <li>custom snippets & booking calendar integration </li>
                                    <li>SEO optimised & analitccs integrated </li>
                                    <li>secure</li>
                            </ul>
                            {/*<p>react mockup</p>
                            <div className='backbutton__wrapper'>
                                <a href='https://github.com/g-i-kala/karocreative.pl-react-version' 
                                rel="noreferrer"
                                target='_blank'
                                className='flat-button'>
                                Code
                                </a> 
                                 
                            </div>*/}
                        </div>
                    </div>

                    <div className="li__work">
                        <div className='li_work_img'>
                            <a href="https://joannaduda.eu" className="li__work__link" 
                                target="_blank" rel="noreferrer">
                                <img src={screen_jxd} alt="screenshot joanna duda" className='screen_img'/>
                            </a>
                        </div>
                        <div className='li_work_text'>
                            <a href="https://letgotohaveit.com" className="li__work__link" target="_blank" rel="noreferrer">
                                joannaduda.eu
                                </a>
                                <ul className="li__work__spec">
                                    <li>graphic design & logo design</li>
                                    <li>prototype in Figma</li>
                                    <li>responsive & accessible design</li>
                                    <li>implemented in Wordpress</li>
                                    <li>build in Oxygen Builder </li>
                                    <li>SEO optimised & analitccs integrated </li>
                                    <li>secure</li>
                            </ul>
                            {/*<p>react mockup</p>
                            <div className='backbutton__wrapper'>
                                <a href='https://github.com/g-i-kala/karocreative.pl-react-version' 
                                rel="noreferrer"
                                target='_blank'
                                className='flat-button'>
                                Code
                                </a> 
                                 
                            </div>*/}
                        </div>
                    </div>

                    <div className="li__work">
                        <div className='li_work_img'>
                            <a href="https://karocreative.pl" className="li__work__link" 
                            target="_blank" rel="noreferrer">    
                                <img src={screen_caro} alt="screenshot karocreative" className='screen_img'/>
                            </a>    
                        </div>
                        <div className='li_work_text'> 
                                <a href="https://karocreative.pl" className="li__work__link" 
                                target="_blank" rel="noreferrer">
                                    karocreative.pl
                                </a>
                            <ul className="li__work__spec">
                                <li>graphic design & logo design</li>
                                <li>prototype in Figma</li>
                                <li>responsive & accessible design</li>
                                <li>implemented & build using React, CSS3</li>
                                <li>secure</li>
                            </ul>
                            <div className='backbutton__wrapper'>
                                <a href='https://github.com/g-i-kala/karocreative.pl-react-version' 
                                rel="noreferrer"
                                target='_blank'
                                className='flat-button'>Code
                                </a>
                            </div>
                        </div>
                    </div>     

                    <div className="li__work">
                        <div className='li_work_img'>
                            <a href="https://g-i-kala.github.io/wakethedead.eu/" className="li__work__link" 
                            target="_blank" rel="noreferrer">
                                <img src={screen_wtd} alt="screenshot wakethedead" className='screen_img'/>
                            </a>
                        </div>
                        <div className='li_work_text'>
                                <a href="https://g-i-kala.github.io/wakethedead.eu/" 
                                className="li__work__link" 
                                target="_blank" rel="noreferrer">
                                wakethedead.eu
                                </a>
                            <ul className="li__work__spec">
                                <li>graphic design & logo design</li>
                                <li>prototype in Figma</li>
                                <li>responsive & accessible design</li>
                                <li>implemented & build using HTML5, CSS3 and JavaScript</li>
                                <li>SEO optimised & analitccs integrated </li>
                                <li>secure</li>
                            </ul>
                            <div className='backbutton__wrapper'>
                                <a href='https://github.com/g-i-kala/wakethedead.eu' 
                                rel="noreferrer" target='_blank'
                                className='flat-button'>
                                    Code
                                </a>
                            </div>
                        </div>
                    </div> 
                    

                    <div className="li__work">
                        <div className='li_work_img'>
                            <a href="https://letgotohaveit.com" className="li__work__link" 
                                target="_blank" rel="noreferrer">
                                <img src={screen_lgth} alt="screenshot letgotohaveit" className='screen_img'/>
                            </a>
                        </div>
                        <div className='li_work_text'>
                            <a href="https://letgotohaveit.com" className="li__work__link" target="_blank" rel="noreferrer">
                                letgotohaveit.com
                                </a>
                                <ul className="li__work__spec">
                                    <li>graphic design & logo design</li>
                                    <li>prototype in Figma</li>
                                    <li>responsive & accessible design</li>
                                    <li>implemented in Wordpress</li>
                                    <li>build in Oxygen Builder </li>
                                    <li>SEO optimised & analitccs integrated </li>
                                    <li>secure</li>
                            </ul>
                            <p>react mockup</p>
                            <div className='backbutton__wrapper'>
                                <a href='https://github.com/g-i-kala/karocreative.pl-react-version' 
                                rel="noreferrer"
                                target='_blank'
                                className='flat-button'>
                                Code
                                </a> 
                                 
                            </div>
                        </div>
                    </div>

                    <div className="li__work">
                        <div className='li_work_img'>
                            <a href="https://karocreative.pl/kalafonia" className="li__work__link" 
                                target="_blank" rel="noreferrer"> 
                                <img src={screen_kalafonia} alt="screenshot kalafonia" className='screen_img'/>
                            </a>
                        </div>
                        <div className='li_work_text'>
                            <a href="https://karocreative.pl/kalafonia" 
                            className="li__work__link" 
                            target="_blank"
                            rel="noreferrer">
                                kalafonia.com
                                </a>
                            <ul className="li__work__spec">
                                <li>graphic design & logo design</li>
                                <li>prototype in Figma</li>
                                <li>responsive & accessible design</li>
                                <li>implemented in Wordpress</li>
                                <li>build in Oxygen Builder </li>
                                <li>SEO optimised & analitccs integrated </li>
                                <li>secure</li>
                            </ul>
                            {/* <div className='backbutton__wrapper'>
                                <a href='https://github.com/g-i-kala/karocreative.pl-react-version' 
                                rel="noreferrer"
                                target='_blank'
                                className='flat-button'>
                                Code
                                </a>
                            </div> */}
                        </div>
                    </div>

                            
                </div>
            
                </div>
            </div>
       </div>
       </>
    )
}

export default MyWork;