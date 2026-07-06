import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import ExperienceItem from "../components/experience/experienceItem";

import INFO from "../data/user";
import SEO from "../data/seo";
import myExperience from "../data/experience";
import myEducation from "../data/education";

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
							{/* 工作經歷區塊 */}
							<div className="experience-section-header" style={{ fontWeight: "bold", fontSize: "1.3rem", color: "#1f2937", marginTop: "40px", borderBottom: "2px solid #e5e7eb", paddingBottom: "8px" }}>
								工作經歷
							</div>
							<div className="experience-wrapper" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
								{myExperience.map((item, index) => (
									<div
										className="experience-item"
										key={`work-${index}`}
									>
										<ExperienceItem
											date={`${item.startDate} - ${item.endDate}`}
											title={item.title}
											description={item.description}
										/>
									</div>
								))}
							</div>

							{/* 學歷區塊 */}
							<div className="experience-section-header" style={{ fontWeight: "bold", fontSize: "1.3rem", color: "#1f2937", marginTop: "30px", borderBottom: "2px solid #e5e7eb", paddingBottom: "8px" }}>
								學歷
							</div>
							<div className="experience-wrapper" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
								{myEducation.map((item, index) => (
									<div
										className="experience-item"
										key={`edu-${index}`}
									>
										<ExperienceItem
											date={`${item.startDate} - ${item.endDate}`}
											title={`${item.title} | ${item.department} ${item.degree}`}
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