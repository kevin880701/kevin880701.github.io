import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import myExperience from "../../data/experience";

import "./styles/works.css";

const Works = () => {
	// 只篩選出工作經歷（type 為 "Work"）
	const workExperiences = myExperience.filter(item => item.type === "Work");

	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{workExperiences.map((work, index) => {
							const [position, company] = work.title.split(" | ");
							
							return (
								<div className="work" key={index}>
									<div className="work-title">{company}</div>
									<div className="work-subtitle">{position}</div>
									<div className="work-duration">{work.date}</div>
								</div>
							);
						})}
					</div>
				}
			/>
		</div>
	);
};

export default Works;