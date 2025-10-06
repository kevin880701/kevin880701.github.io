import React from "react";
import "./style/experience.css";

const ExperienceItem = (props) => {
	const { date, title, description } = props;

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
								return (
									<a
										key={partIndex}
										href={part.url}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											color: '#007bff',
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
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											color: '#007bff',
											textDecoration: 'none',
											marginLeft: '2px',
											marginRight: '2px'
										}}
									>
										{link.text}
									</a>
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
					<div className="article-title">{title}</div>
					<div className="article-description">
						{formatDescription(description)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ExperienceItem;