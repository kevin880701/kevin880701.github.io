import React from "react";
import { Link } from "react-router-dom";

import { useI18n } from "../../i18n/LanguageContext";
import "./style/experience.css";

const ExperienceItem = (props) => {
	const { date, title, description, logo } = props;
	const { localizedPath } = useI18n();

	const formatDescription = (desc) => {
		// 檢查是否為新的物件陣列格式
		if (Array.isArray(desc)) {
			return desc.map((item, key) => {
				// 如果是新的 parts 格式
				if (typeof item === 'object' && item.parts !== undefined) {
					return (
						<React.Fragment key={key}>
							• {item.parts.map((part, partIndex) => {
							if (part.type === 'text') {
								return <span key={partIndex}>{part.content}</span>;
							} else if (part.type === 'link') {
								if (part.url.startsWith('/')) {
									return (
										<Link
											key={partIndex}
											to={localizedPath(part.url)}
											style={{
												color: '#0e7490',
												textDecoration: 'none'
											}}
										>
											{part.content}
										</Link>
									);
								}

								return (
									<a
										key={partIndex}
										href={part.url}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											color: '#0e7490',
											textDecoration: 'none'
										}}
									>
										{part.content}
									</a>
								);
							}
							return null;
						})}
							<br/>
						</React.Fragment>
					);
				}
				// 如果是舊的物件格式（向後兼容）
				else if (typeof item === 'object' && item.text !== undefined) {
					return (
						<React.Fragment key={key}>
							• {item.text}
							{item.links && item.links.map((link, linkIndex) => (
								<React.Fragment key={linkIndex}>
									{link.url.startsWith('/') ? (
										<Link
											to={localizedPath(link.url)}
											style={{
												color: '#0e7490',
												textDecoration: 'none',
												marginLeft: '2px',
												marginRight: '2px'
											}}
										>
											{link.text}
										</Link>
									) : (
										<a
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												color: '#0e7490',
												textDecoration: 'none',
												marginLeft: '2px',
												marginRight: '2px'
											}}
										>
											{link.text}
										</a>
									)}
								</React.Fragment>
							))}
							{item.suffix || ''}
							<br/>
						</React.Fragment>
					);
				}
				// 如果是字串格式（舊格式兼容）
				else if (typeof item === 'string') {
					return <React.Fragment key={key}>• {item}<br/></React.Fragment>
				}
				return null;
			});
		} else {
			// 保持對最舊格式的兼容性（字串用 \n 分割）
			return desc.split('\n').map((item, key) => {
				return <React.Fragment key={key}>{item}<br/></React.Fragment>
			});
		}
	}

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				<div className="article-right-side">
					<div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
						{logo && (
							<img
								src={logo}
								alt=""
								style={{
									width: "36px",
									height: "36px",
									borderRadius: "6px",
									objectFit: "contain",
									backgroundColor: "#fff",
									boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
								}}
							/>
						)}
						<div className="article-title" style={{ margin: 0 }}>{title}</div>
					</div>
					<div className="article-description">
						{formatDescription(description)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ExperienceItem;
