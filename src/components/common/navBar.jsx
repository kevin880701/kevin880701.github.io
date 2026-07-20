import React from "react";
import { Link } from "react-router-dom";

import { useI18n } from "../../i18n/LanguageContext";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const { data, localizedPath } = useI18n();
	const { nav } = data.labels;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to={localizedPath("/")}>{nav.home}</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to={localizedPath("/about")}>{nav.about}</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to={localizedPath("/projects")}>{nav.projects}</Link>
							</li>
							<li
								className={
									active === "experience"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to={localizedPath("/experience")}>{nav.experience}</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to={localizedPath("/contact")}>{nav.contact}</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
