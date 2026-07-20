import React from "react";
import { Link } from "react-router-dom";

import { useI18n } from "../../i18n/LanguageContext";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;
	const { data, localizedPath } = useI18n();
	const { info: INFO } = data;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={INFO.main.logo} alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to={localizedPath("/")}>{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
