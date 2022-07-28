import { header } from '../../portfolio'
//import Navbar from '../Navbar/Navbar'
//import './Header.css'


const Header = () => {
    const { homepage, title } = header


    return (
        <header>
            <h3>
                {homepage ? 
                (<a href={homepage}>{title}</a>) :
                (title)}
            </h3>

        </header>
    )
}

export default Header