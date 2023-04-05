import './index.scss'
import Loader from '../Loader'
import AnimateLetters from '../AnimateLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();


    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_9qxtfhq',
                'template_skk24jx',
                refForm.current,
                'obL_AMGT4wzeNKMkc'
            )

            .then (
                ()=> {
                    alert('Message succesfuly sent');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again');

                }
            )
    }

    return (
        <>
            <div className='container content__wrapper contact-page'>
                <div className='text-zone'>
                    <h1 className='h1-name'>
                    <AnimateLetters letterClass={letterClass} 
                        strArray={['C','o','n','t','a','c','t',' _ ','m','e']}
                        idx={20} />
                    </h1>
                    <p className='text-contact'>
                    I am interested in freelance opportunities, particularly in web development. However, if you have any other requests or questions, please do not hesitate to contact me through the form below.
                    </p>
                    <div className='form__wrapper'>
                        <form ref={refForm} onSubmit={sendEmail} className='contact-form'>       
                                <div className='half form-style'>
                                    <input type='text' className='w100 ip-style' name='from_name' placeholder='Name' required/>
                                </div>
                                <div className='half form-style'>
                                <   input type='email' className='w100 ip-style' name='the_email' placeholder='Email' required/>
                                </div>
                                <div className='w100 form-style'>
                                    <input placeholder='Subject'type='text' className='w100 ip-style' name='subject' required/>
                                </div>
                                <div className='w100 form-style'>
                                    <textarea placeholder='Message' className='w100 ta-style' name='message' required />
                                </div>
                                <div className='w100 form-style'>
                                    <input type='submit'  className='flat-button' value='SEND'/>
                                </div>
                        </form>
                    </div>    
                </div>
            </div>
            <Loader />        
        </>
    )

}

export default Contact