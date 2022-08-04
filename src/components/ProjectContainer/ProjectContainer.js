import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
    <div className='project'>
        <h3>{project.name}</h3>

        <p className='project__description'>{project.description}</p>
        {project.stack && (
            <ul className='project__stack'>
                {project.stack.map((item) => (
                    <li key={uniqid()} className='project__stack-item'>
                        {item}
                    </li>
                ))}
            </ul>
        )}

        {project.sourceCode && (
            <a 
                href={project.sourceCode}
                className='link link--icon'
            >
                <GitHubIcon />
            </a>
        )}

        {project.livePreview && (
            <a 
                href={project.livePreview}
                className='link link--icon'
            >
                <RocketLaunchIcon />
        </a>
    )}
    </div>

)

export default ProjectContainer