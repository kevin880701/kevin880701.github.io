import React from "react";

import { useI18n } from "../../i18n/LanguageContext";

import "./styles/socials.css";

const Socials = () => {
	const { data } = useI18n();
	const { info: INFO, labels } = data;

	return (
		<div className="socials">
			{INFO.socials.map((social, index) => (
				<div className="social" key={index}>
					<a href={social.url} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<img
								src={social.logo}
								alt={social.name}
								className="social-icon-img"
							/>
						</div>
						<div className="social-text">
							{social.name === "Email" 
								? INFO.main.email 
								: `${labels.common.followOn} ${social.name}`}
						</div>
					</a>
				</div>
			))}
		</div>
	);
};

export default Socials;
