import uniqid from 'uniqid'
import { skills } from '../../portfolio'

const Skills = () => {
    if (!skills.length) return null

    return (
        <section id='skills'>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill) =>(
                    <li key={uniqid()}>
                    {skill}
                    </li>
                ))}
            </ul>
        </section>
    )

}

export default Skills