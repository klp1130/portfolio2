import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio'

const About = () => {
    const { name, role, description, resume, social } = about

    return(
        <div>
            { name && (
                <h1>
                    Hi, I am <span>{name}.</span>
                </h1>
            )}

            {role && <h2>A {role}.</h2>}
            <p>{description && description}</p>
            
            <div>
                {resume && (
                    <a href={resume}>
                        <span type='button'>
                            Resume
                        </span>
                    </a>
                )}

            {social && (  
                <> 
                <a
                  href={social.github}
                >
                  <GitHubIcon />
                </a>
            )

            {social && (   
                <a
                  href={social.linkedin}
                >
                  <LinkedInIcon />
                </a>
                 )}
                </>
            )}
          </div>
        </div>
    )
}

export default About 