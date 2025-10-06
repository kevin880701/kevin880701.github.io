import React from "react";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
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
								: `Follow on ${social.name}`}
						</div>
					</a>
				</div>
			))}
		</div>
	);
};

export default Socials;