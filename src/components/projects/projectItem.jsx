import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { useI18n } from "../../i18n/LanguageContext";
import "./styles/projectItem.css";

const ProjectItem = (props) => {
	const { logo, title, description, linkText, link, projectSlug } = props;
	const { data, localizedPath } = useI18n();
	const { projects: projectLabels } = data.labels;

	// 如果有 projectSlug，使用內部路由；沒有則使用外部連結
	const hasSlug = projectSlug !== undefined && projectSlug !== null;
	const linkPath = hasSlug ? localizedPath(`/project/${projectSlug}`) : link;
	const isExternalLink = !hasSlug;


	return (
		<React.Fragment>
			<div className="project">
				<Link
					to={linkPath}
					target={isExternalLink ? "_blank" : "_self"}
					rel={isExternalLink ? "noopener noreferrer" : ""}
				>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">
								{hasSlug ? projectLabels.viewDetails : (linkText || projectLabels.viewProject)}
							</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default ProjectItem;
