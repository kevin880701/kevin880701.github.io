import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import { useI18n } from "../i18n/LanguageContext";

import "./styles/404.css";

const Notfound = () => {
	const { data, localizedPath } = useI18n();
	const { info: INFO, labels } = data;

	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, [INFO.main.title]);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								{labels.notFound.title} <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">
								{labels.notFound.messagePrefix}
								<br />
								The requested URL "{window.location.href}" was
								{labels.notFound.messageSuffix}
							</div>
							<Link to={localizedPath("/")} className="not-found-link">
								{labels.notFound.backHome}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
