import '../css/Projects.css'
import Project_card from './Project_card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import projects from '../assets/projects.json';

function Projects () {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };
    return (
        <div className='projects'>
            <div className='title_row'>
                <h1>
                    <hr className='left_line' />
                        Projects
                    <hr className='right_line'/>
                </h1>
                <p>Recent Work</p>
            </div>
            <Slider {...settings}>
                {
                    projects.map((project) => {
                        return <Project_card data = {project}/>
                    })
                }
            </Slider>
        </div>
    );
}

export default Projects