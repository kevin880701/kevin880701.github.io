import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import ExperienceItem from "../components/experience/experienceItem";

import INFO from "../data/user";
import SEO from "../data/seo";
import myExperience from "../data/experience";

import "./styles/experience.css";

const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "experience");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`經歷 | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="experience-logo-container">
						<div className="experience-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="experience-main-container">
						<div className="title experience-title">
							{INFO.experience.title}
						</div>

						<div className="subtitle experience-subtitle">
							{INFO.experience.description}
						</div>

						<div className="experience-container">
							<div className="experience-wrapper">
								{myExperience.map((item, index) => (
									<div
										className="experience-item"
										key={(index + 1).toString()}
									>
										<ExperienceItem
											key={(index + 1).toString()}
											date={item.date}
											title={item.title}
											description={item.description}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;