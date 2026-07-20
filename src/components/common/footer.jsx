import React from "react";
import { Link } from "react-router-dom";

import { useI18n } from "../../i18n/LanguageContext";
import "./styles/footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
	const { data, localizedPath } = useI18n();
	const { nav } = data.labels;

	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to={localizedPath("/")}>{nav.home}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to={localizedPath("/about")}>{nav.about}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to={localizedPath("/projects")}>{nav.projects}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to={localizedPath("/experience")}>{nav.experience}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to={localizedPath("/contact")}>{nav.contact}</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
                        © {currentYear} Liu Haoran. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
