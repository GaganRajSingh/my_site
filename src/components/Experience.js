import { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import Job_exp from "./Job_exp";
import Job_banner from "./Job_banner";
import "../css/Experience.css";

function Experience() {
	const [activeItem, setActiveItem] = useState("BGC Engineering");
	const [isMobileView, setIsMobileView] = useState(false);

	const handleResize = () => {
		setIsMobileView(window.innerWidth <= 768 ? true : false);
	};

	useEffect(() => {
		setIsMobileView(window.innerWidth <= 768 ? true : false);
		window.addEventListener("resize", handleResize);
	}, []);

	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};

	return (
		<div className="experience">
			<div className="title_row">
				<h1>
					<hr className="left_line" />
					Experience
					<hr className="right_line" />
				</h1>
				<p>Places I've worked</p>
			</div>
			<div className="experienceWrapper">
				<div className="column_25">
					<Job_banner name={activeItem} />

					<div className="column_25_menu">
						<Menu
							className={
								isMobileView
									? "large pointing secondary temp"
									: "vertical large pointing secondary"
							}
						>
							<Menu.Item
								id="exp3"
								name="BGC Engineering"
								active={activeItem === "BGC Engineering"}
								onClick={handleItemClick}
							/>
							<Menu.Item
								id="exp4"
								name="Accountium"
								active={activeItem === "Accountium"}
								onClick={handleItemClick}
							/>
							<Menu.Item
								id="exp1"
								name="University of Alberta"
								active={activeItem === "University of Alberta"}
								onClick={handleItemClick}
							/>
							<Menu.Item
								id="exp2"
								name="Deloitte"
								active={activeItem === "Deloitte"}
								onClick={handleItemClick}
							/>
						</Menu>
					</div>
				</div>
				<div className="column_75">
					<div className="column_75_exp">
						<Job_exp name={activeItem} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
