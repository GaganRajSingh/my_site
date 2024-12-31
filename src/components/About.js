import "../css/About.css";
import Socials from "./Socials";

function About() {
	const image_src = require("../assets/photo.jpeg");
	return (
		<div className="about">
			<div className="column">
				<div className="avatar">
					<img
						src={image_src}
						className="avatar_image"
						alt="Avatar"
					/>
				</div>
				<Socials />
			</div>
			<div className="column">
				<div className="intro">
					<p>👋🏻 Hi, I'm</p>
					<h1>Gagan Raj Singh</h1>
					<p>I'm a Software Developer, CS @ UofA '24</p>
					<br />
					<h3>📌 Vancouver, BC</h3>
				</div>
			</div>
		</div>
	);
}

export default About;
