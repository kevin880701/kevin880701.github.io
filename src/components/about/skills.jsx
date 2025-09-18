import React from "react";
import mySkills from "../../data/skills";
import "./styles/skills.css";

const Skills = () => {
	// 圖標渲染組件 - 支援自定義圖標和 Font Awesome 回退
	const SkillIcon = ({ iconSrc, altText, className }) => {
		return (
			<img
				src={iconSrc}
				alt={altText}
				className={className}
				style={{
					width: className === 'category-icon' ? '24px' : '18px',
					height: className === 'category-icon' ? '24px' : '18px',
					objectFit: 'contain'
				}}
				onError={(e) => {
					// 如果圖標載入失敗，隱藏圖片
					e.target.style.display = 'none';
				}}
			/>
		);
	};

	return (
		<div className="skills-container">
			<div className="skills-title">專業技能（Skills）</div>
			<div className="skills-content">
				{mySkills.map((skillGroup, index) => (
					<div className="skill-category" key={index}>
						<div className="skill-category-title">
							<SkillIcon
								iconSrc={skillGroup.icon}
								altText={skillGroup.category}
								className="category-icon"
							/>
							{skillGroup.category}
						</div>
						<div className="skill-items">
							{skillGroup.skills.map((skill, skillIndex) => (
								<span className="skill-item" key={skillIndex}>
									<SkillIcon
										iconSrc={skill.icon}
										altText={skill.name}
										className="skill-icon"
									/>
									{skill.name}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;