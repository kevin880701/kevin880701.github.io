import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/projectItem.css";

const ProjectItem = (props) => {
	const { logo, title, description, linkText, link, projectId } = props;
	const location = useLocation();

	// 檢查是否在 projects 頁面，如果是則使用內部路由，否則使用外部連結
	const isProjectsPage = location.pathname === "/projects";
	const linkPath = isProjectsPage ? `/project/${projectId}` : link;
	const isExternalLink = !isProjectsPage;

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
								{isProjectsPage ? "查看詳情" : (linkText || "查看專案")}
							</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default ProjectItem;