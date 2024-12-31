import { MdEmail } from "react-icons/md";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "../css/About.css";

function Socials() {
	return (
		<div className="socials">
			<ul>
				<li>
					<a target="_blank" href="https://github.com/gaganrajsingh">
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
					<a target="_blank" href="https://twitter.com/Gagan_2610">
						{" "}
						<BsTwitter />{" "}
					</a>
				</li>
				<li>
					<a target="_blank" href="mailto:grsingh@ualberta.ca">
						{" "}
						<MdEmail size={21} />{" "}
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Socials;
