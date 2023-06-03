import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import "../../variables.scss"
import LogoS from '../../assets/images/karocreative_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import variables from "../../variables.scss"


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='nav__logo' to='/'>
            <img src={LogoS} alt='logo' />
        </Link>
        <nav className='nav__items'>
            <NavLink 
                exact='true' 
                activeclassname='active' 
                to='/'>
                <FontAwesomeIcon icon={faHome} color={variables.color_01}/>
            </NavLink>
            <NavLink 
                exact='true' 
                activeclassname='active' 
                className='about-link' 
                to='/about'>
                <FontAwesomeIcon icon={faUser} color={variables.color_01}/>
            </NavLink>
            <NavLink 
                exact='true' 
                activeclassname='active' 
                className='work-link' 
                to='/work'>
                <FontAwesomeIcon icon={faLaptop} color={variables.color_01}/>
            </NavLink>
            <NavLink 
                exact='true' 
                activeclassname='active' 
                className='contact-link' 
                to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color={variables.color_01}/>
            </NavLink>
            <a
                target="_blank"  
                rel="noreferrer"
                className='linkedin-link' 
                href='https://www.linkedin.com/in/karolina-ankiewicz-a130106b/'>
                <FontAwesomeIcon icon={faLinkedin} color={variables.color_01}/>
            </a>

        </nav>
    </div>
    
    );

export default Sidebar;