import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
    if (!contact.email) return null 

    return (
        <section id='contact'>
            <h2>Contact</h2>
            <a href={`mailto:${contact.email}`}>
                <span type='button'>
                    Email me
                </span>
            </a>
        </section>
    )
}

export default Contact 