import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/projectItem.css";

const ProjectItem = (props) => {
	const { logo, title, description, linkText, link, projectSlug } = props;

	// 如果有 projectSlug，使用內部路由；沒有則使用外部連結
	const hasSlug = projectSlug !== undefined && projectSlug !== null;
	const linkPath = hasSlug ? `/project/${projectSlug}` : link;
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
								{hasSlug ? "查看詳情" : (linkText || "查看專案")}
							</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default ProjectItem;