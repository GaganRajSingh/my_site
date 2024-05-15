import "../css/About.css";
import { MdEmail } from "react-icons/md";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

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
				<div className="socials">
					<ul>
						<li>
							<a
								target="_blank"
								href="https://github.com/gaganrajsingh"
							>
								{" "}
								<BsGithub />{" "}
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="https://linkedin.com/in/gagan-raj-singh"
							>
								{" "}
								<BsLinkedin />{" "}
							</a>
						</li>
						<li>
							<a target="_blank" href="https://leetcode.com/grsb">
								{" "}
								<SiLeetcode />{" "}
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="https://twitter.com/Gagan_2610"
							>
								{" "}
								<BsTwitter />{" "}
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="mailto:grsingh@ualberta.ca"
							>
								{" "}
								<MdEmail size={21} />{" "}
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="column">
				<div className="intro">
					<p>👋🏻 Hi, I'm</p>
					<h1>Gagan Raj Singh</h1>
					<p>Software developer and a CS grad student @UofA.</p>
				</div>
			</div>
		</div>
	);
}

export default About;
