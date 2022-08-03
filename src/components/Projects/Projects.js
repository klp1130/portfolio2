import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'

const Projects = () => {
    if (!projects.length) return null

    return (
        <section id='projects'>
            <h2>Projects</h2>

            <div>
                {projects.map((project) => (
                    <ProjectContainer key={uniqid()} project={project} />
                ))}
            </div>
        </section>
    )

}

export default Projects