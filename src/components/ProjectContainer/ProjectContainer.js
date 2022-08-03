import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const ProjectContainer = ({ project }) => (
    <div className='project'>
        <h3>{project.name}</h3>

        <p>{project.description}</p>
        {project.stack && (
            <ul>
                {project.stack.map((item) => (
                    <li key={uniqid()}>
                        {item}
                    </li>
                ))}
            </ul>
        )}

        {project.sourceCode && (
            <a href={project.sourceCode}>
                <GitHubIcon />
            </a>
        )}

        {project.livePreview && (
            <a href={project.livePreview}>
            <RocketLaunchIcon />
        </a>
    )}
    </div>

)

export default ProjectContainer