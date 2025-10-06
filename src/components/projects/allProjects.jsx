import React from "react";

import ProjectItem from "./projectItem";

import PROJECTS from "../../data/projects";

import "./styles/allProjects.css";

const AllProjects = () => {
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