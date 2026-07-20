import React from "react";

import ProjectItem from "./projectItem";

import { useI18n } from "../../i18n/LanguageContext";

import "./styles/allProjects.css";

const AllProjects = () => {
	const { data } = useI18n();
	const { projects: PROJECTS } = data;

	return (
		<div className="all-projects-container">
			{PROJECTS.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<ProjectItem
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						projectSlug={project.slug}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
