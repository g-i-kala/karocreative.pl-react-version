import './index.scss';
import '../../omni.scss';

const ProjectCard = ({ title, image, liveUrl, codeUrl, description}) => {
    return <>
        <div className="li__work">
            <figure className="li_work_img">
                <a href={liveUrl} className="li__work__link" target="_blank" rel="noreferrer">
                    <img src={image} alt={`${title} screenshot`} className="screen_img" />
                </a>
            </figure>
            <div className="li_work_text">
                <a href={liveUrl} className="li__work__link" target="_blank" rel="noreferrer">
                    {title}
                </a>
                <ul className="li__work__spec">
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                {codeUrl && (
                    <div className="backbutton__wrapper">
                        <a href={codeUrl} rel="noreferrer" target="_blank" className="flat-button">
                            Code
                        </a>
                    </div>
                )}
            </div>
        </div>
    </>
};

export default ProjectCard;