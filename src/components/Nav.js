import {Link} from "react-scroll";
import '../css/Nav.css'

function Nav() {
    const logo = require('../assets/logo1.png')
    return (
        <nav className="nav__container__actions">
            <a className="logo_link" href="localhost:3000">
                <img className="logo_image" src={logo}/>
            </a>
            <ul>
                <li>
                    <Link activeClass="active" smooth spy to="about_section">
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="skills_section">
                        SKILLS
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="experience_section">
                        EXPERIENCE
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="projects_section">
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="resume_section">
                        RESUME
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="contact_section">
                        CONTACT ME
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;