import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import myExperience from "../../data/experience";

import "./styles/works.css";

const Works = () => {
	// 取得所有工作經歷
	const workExperiences = myExperience;

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
									<div className="work-duration">{work.startDate} - {work.endDate}</div>
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