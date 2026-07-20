import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

// Paths
const currentDir = process.cwd();
const translationsDir = path.join(currentDir, 'src/i18n/translations');
const publicDir = path.join(currentDir, 'public');

// Import ES modules dynamically
const { default: zhTW } = await import(path.join(translationsDir, 'zh-TW.js'));
const { default: en } = await import(path.join(translationsDir, 'en.js'));

let doc;
let INFO;
let ABOUT;
let myEducation;
let myExperience;
let mySkills;
let PROJECTS;
let PUBLICATIONS;
let LABELS;

// Calculate age dynamically from birthday in user.js
function calculateAge(birthdayString) {
	const birthDate = new Date(birthdayString);
	const today = new Date();
	let age = today.getFullYear() - birthDate.getFullYear();
	const m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}
// Calculate total work experience dynamically from myExperience (max - min)
function getExperienceYearsString() {
	if (!myExperience || myExperience.length === 0) return LABELS.noWorkExperience;

	let minDate = new Date();
	let maxDate = new Date(0);

	myExperience.forEach(exp => {
		const [sYear, sMonth] = exp.startDate.split('/').map(Number);
		const start = new Date(sYear, sMonth - 1, 1);

		let end;
		if (exp.endDate === "至今" || exp.endDate === "Present") {
			end = new Date();
		} else {
			const [eYear, eMonth] = exp.endDate.split('/').map(Number);
			end = new Date(eYear, eMonth - 1, 1);
		}

		if (start < minDate) minDate = start;
		if (end > maxDate) maxDate = end;
	});

	const totalMonths = (maxDate.getFullYear() - minDate.getFullYear()) * 12 + (maxDate.getMonth() - minDate.getMonth());
	const yearsDecimal = (totalMonths / 12).toFixed(1);
	return LABELS.workExperienceYears(yearsDecimal);
}

function setupDocument(outputPath) {
	doc = new PDFDocument({
		size: 'A4',
		margins: { top: 40, bottom: 40, left: 40, right: 40 },
		autoFirstPage: true
	});

	const writeStream = fs.createWriteStream(outputPath);
	doc.pipe(writeStream);

	// Override doc.text to automatically sanitize Chinese punctuation marks
	// that cause font CID mapping bugs (rendering as weird symbols like ¬, ¯, ︾)
	const originalText = doc.text;
	doc.text = function (text, ...args) {
	if (typeof text === 'string') {
		text = text
			.replace(/「/g, '"')
			.replace(/」/g, '"')
			.replace(/《/g, '"')
			.replace(/》/g, '"')
			.replace(/『/g, '"')
			.replace(/』/g, '"')
			.replace(/〈/g, '"')
			.replace(/〉/g, '"')
			.replace(/（/g, '(')
			.replace(/）/g, ')');
	}
	return originalText.call(this, text, ...args);
	};

	doc.registerFont('Heiti', fontPathLight, 'STHeitiTC-Light');
	doc.registerFont('Heiti-Bold', fontPathMedium, 'STHeitiTC-Medium');

	return writeStream;
}

// Register Fonts (macOS System Chinese Font STHeiti)
const fontPathLight = '/System/Library/Fonts/STHeiti Light.ttc';
const fontPathMedium = '/System/Library/Fonts/STHeiti Medium.ttc';

// Colors
const COLOR_PRIMARY = '#1f2937'; // gray-800
const COLOR_SECONDARY = '#4b5563'; // gray-600
const COLOR_MUTED = '#9ca3af'; // gray-400
const COLOR_ACCENT = '#0e7490'; // deep cyan/teal
const COLOR_LINE = '#e5e7eb'; // gray-200

// Helper: Ensure page space
function checkPageSpace(doc, heightNeeded) {
	const bottomMargin = doc.page.margins.bottom;
	const pageHeight = doc.page.height;
	if (doc.y + heightNeeded > pageHeight - bottomMargin) {
		doc.addPage();
		drawHeaderOnNewPage(doc);
	}
}

function drawHeaderOnNewPage(doc) {
	doc.y = 40; // reset y to top margin
}

// 1. Draw PDF Header
function drawMainHeader() {
	// Header visual block background (soft light gray)
	doc.save();
	doc.rect(40, 40, 515.28, 112).fill('#f8fafc');
	doc.restore();

	// Profile image (avatar.png) circular crop on the left
	const photoPath = path.join(publicDir, 'avatar.png');
	const photoX = 80;
	const photoY = 96;
	const photoRadius = 35;

	if (fs.existsSync(photoPath)) {
		doc.save();
		doc.circle(photoX, photoY, photoRadius).clip();
		doc.image(photoPath, photoX - photoRadius, photoY - photoRadius, { width: photoRadius * 2 });
		doc.restore();
	} else {
		// Draw placeholder circle if no photo
		doc.save();
		doc.circle(photoX, photoY, photoRadius).fillColor('#e2e8f0').fill();
		doc.restore();
	}

	// Name & Core Subtitles
	const textStartX = 140;
	const textWidth = 385;
	doc.fillColor(COLOR_PRIMARY);

	const primaryEdu = myEducation[0];
	const titleText = `${INFO.main.name} | ${LABELS.jobTitle}`;
	const eduText = `${primaryEdu.title} | ${primaryEdu.department.replace(/系$/, '')} ${primaryEdu.degree}`;
	const expYearsStr = getExperienceYearsString();
	const infoText = `${LABELS.location} | ${expYearsStr} | ${INFO.main.phone} | ${INFO.main.email}`;

	doc.font('Heiti-Bold').fontSize(18);
	const titleHeight = doc.heightOfString(titleText, {
		width: textWidth,
		lineGap: 1,
	});

	doc.font('Heiti').fontSize(10);
	const eduHeight = doc.heightOfString(eduText, {
		width: textWidth,
		lineGap: 1,
	});

	doc.font('Heiti').fontSize(8.5);
	const infoHeight = doc.heightOfString(infoText, {
		width: textWidth,
		lineGap: 1,
	});

	const textGap = 8;
	const headerTop = 40;
	const headerHeight = 112;
	const totalTextHeight = titleHeight + eduHeight + infoHeight + textGap * 2;
	let currentTextY = headerTop + (headerHeight - totalTextHeight) / 2;

	// Name | Title
	doc.fillColor(COLOR_PRIMARY).font('Heiti-Bold').fontSize(18).text(titleText, textStartX, currentTextY, {
		width: textWidth,
		lineGap: 1,
	});
	currentTextY += titleHeight + textGap;

	// Subtitle: School & Degree
	doc.font('Heiti').fontSize(10).fillColor(COLOR_SECONDARY);
	doc.text(eduText, textStartX, currentTextY, {
		width: textWidth,
		lineGap: 1,
	});
	currentTextY += eduHeight + textGap;

	// Subtitle: Core Info Tagline
	doc.font('Heiti').fontSize(8.5).fillColor(COLOR_MUTED);
	doc.text(infoText, textStartX, currentTextY, {
		width: textWidth,
		lineGap: 1,
	});

	doc.y = 152;
}

// 3. Education Section
function drawEducation() {
	doc.addPage();
	drawHeaderOnNewPage(doc);
	drawSectionTitle(LABELS.education);

	myEducation.forEach((edu) => {
		// Calculate height estimate for this education entry
		const bulletCount = edu.resumeDescription ? edu.resumeDescription.length : 0;
		const entryHeight = 45 + bulletCount * 18 + 10;

		checkPageSpace(doc, entryHeight);
		const startY = doc.y;
		const hasLogo = edu.logo && fs.existsSync(path.join(publicDir, edu.logo));
		const textX = hasLogo ? 70 : 40;
		const dateWidth = hasLogo ? 485.28 : 515.28;

		if (hasLogo) {
			doc.save();
			doc.roundedRect(40, startY + 2, 22, 22, 4).clip();
			doc.image(path.join(publicDir, edu.logo), 40, startY + 2, { width: 22, height: 22 });
			doc.restore();
		}

		// School Name
		doc.fillColor(COLOR_PRIMARY).font('Heiti-Bold').fontSize(11);
		doc.text(edu.title, textX, startY);

		// Department & Degree
		doc.fillColor(COLOR_SECONDARY).font('Heiti').fontSize(9);
		doc.text(`${edu.department} | ${edu.degree}`, textX, startY + 16);

		// Date Range
		doc.fillColor(COLOR_SECONDARY).font('Heiti').fontSize(9);
		doc.text(`${edu.startDate} ~ ${edu.endDate}`, textX, startY, { align: 'right', width: dateWidth });

		// Draw description bullets if present
		let bulletY = startY + 32;
		const bulletTextX = hasLogo ? 83 : 53;
		const bulletTextWidth = hasLogo ? 472 : 502;

		if (edu.resumeDescription && edu.resumeDescription.length > 0) {
			edu.resumeDescription.forEach((desc) => {
				doc.fillColor(COLOR_PRIMARY).font('Heiti').fontSize(9);
				doc.text('•', textX, bulletY, { width: 10 });

				let heightEstimate = 12;

				if (desc.text) {
					doc.text(desc.text, bulletTextX, bulletY, { width: bulletTextWidth, align: 'left', lineGap: 2 });
					heightEstimate = doc.heightOfString(desc.text, { width: bulletTextWidth, lineGap: 2 });
				} else if (desc.parts) {
					const plainText = desc.parts.map(p => p.content).join('');
					heightEstimate = doc.heightOfString(plainText, { width: bulletTextWidth, lineGap: 2 });

					const firstPart = desc.parts[0];
					const isLast = desc.parts.length === 1;

					const firstOptions = {
						width: bulletTextWidth,
						align: 'left',
						lineGap: 2,
						continued: !isLast
					};
					if (firstPart.type === 'link') {
						doc.fillColor(COLOR_ACCENT);
						let url = firstPart.url;
						if (url.startsWith('/')) url = 'https://kevin880701.github.io' + url;
						firstOptions.link = url;
					} else {
						doc.fillColor(COLOR_PRIMARY);
					}
					doc.text(firstPart.content, bulletTextX, bulletY, firstOptions);

					for (let i = 1; i < desc.parts.length; i++) {
						const part = desc.parts[i];
						const isPartLast = i === desc.parts.length - 1;
						const options = {
							continued: !isPartLast
						};
						if (part.type === 'link') {
							doc.fillColor(COLOR_ACCENT);
							let url = part.url;
							if (url.startsWith('/')) url = 'https://kevin880701.github.io' + url;
							options.link = url;
						} else {
							doc.fillColor(COLOR_PRIMARY);
						}
						doc.text(part.content, options);
					}
					doc.fillColor(COLOR_PRIMARY); // restore final state
				}

				bulletY += heightEstimate + 6;
			});
		}

		doc.y = bulletY + 10;
	});
}

// 4. Experience Section
function drawExperience() {
	checkPageSpace(doc, 100);
	drawSectionTitle(LABELS.workExperience);

	// Total experience
	doc.fillColor(COLOR_PRIMARY).font('Heiti-Bold').fontSize(10);
	doc.text(`${LABELS.totalExperience}: ${getExperienceYearsString()}`, 40, doc.y);
	doc.y += 15;

	// Loop through myExperience (which matches experience.js)
	myExperience.forEach((exp) => {
		// Calculate height estimate for this work entry
		const bulletCount = exp.description.length;
		const entryHeight = 45 + bulletCount * 18 + 20;

		checkPageSpace(doc, entryHeight);

		const startY = doc.y;
		const hasLogo = exp.logo && fs.existsSync(path.join(publicDir, exp.logo));
		const textX = hasLogo ? 70 : 55;
		const dateWidth = hasLogo ? 485.28 : 500.28;

		if (hasLogo) {
			doc.save();
			doc.roundedRect(40, startY + 2, 22, 22, 4).clip();
			doc.image(path.join(publicDir, exp.logo), 40, startY + 2, { width: 22, height: 22 });
			doc.restore();
		} else {
			// Draw a simple left color indicator block representing logo / timeline
			doc.save();
			doc.rect(40, startY + 2, 5, 25).fillColor(COLOR_ACCENT).fill();
			doc.restore();
		}

		// Job Title & Date
		doc.fillColor(COLOR_PRIMARY).font('Heiti-Bold').fontSize(11);
		doc.text(exp.title, textX, startY);

		doc.fillColor(COLOR_SECONDARY).font('Heiti').fontSize(9);
		doc.text(`${exp.startDate} - ${exp.endDate}`, textX, startY, { align: 'right', width: dateWidth });

		// Description bullets
		let bulletY = startY + 24;
		const bulletTextX = hasLogo ? 83 : 68;
		const bulletTextWidth = hasLogo ? 472 : 487;

		exp.description.forEach((desc) => {
			doc.fillColor(COLOR_PRIMARY).font('Heiti').fontSize(9);
			doc.text('•', textX, bulletY, { width: 10 });

			let heightEstimate = 12;

			if (desc.text) {
				doc.text(desc.text, bulletTextX, bulletY, { width: bulletTextWidth, align: 'left', lineGap: 2 });
				heightEstimate = doc.heightOfString(desc.text, { width: bulletTextWidth, lineGap: 2 });
			} else if (desc.parts) {
				const plainText = desc.parts.map(p => p.content).join('');
				heightEstimate = doc.heightOfString(plainText, { width: bulletTextWidth, lineGap: 2 });

				const firstPart = desc.parts[0];
				const isLast = desc.parts.length === 1;

				const firstOptions = {
					width: bulletTextWidth,
					align: 'left',
					lineGap: 2,
					continued: !isLast
				};
				if (firstPart.type === 'link') {
					doc.fillColor(COLOR_ACCENT);
					let url = firstPart.url;
					if (url.startsWith('/')) url = 'https://kevin880701.github.io' + url;
					firstOptions.link = url;
				} else {
					doc.fillColor(COLOR_PRIMARY);
				}
				doc.text(firstPart.content, bulletTextX, bulletY, firstOptions);

				for (let i = 1; i < desc.parts.length; i++) {
					const part = desc.parts[i];
					const isPartLast = i === desc.parts.length - 1;
					const options = {
						continued: !isPartLast
					};
					if (part.type === 'link') {
						doc.fillColor(COLOR_ACCENT);
						let url = part.url;
						if (url.startsWith('/')) url = 'https://kevin880701.github.io' + url;
						options.link = url;
					} else {
						doc.fillColor(COLOR_PRIMARY);
					}
					doc.text(part.content, options);
				}
				doc.fillColor(COLOR_PRIMARY); // restore final state
			}

			bulletY += heightEstimate + 6;
		});

		doc.y = bulletY + 10;
	});
}



// 5.5 Specialties (專長)
function drawSpecialties() {
	const specialties = mySkills.filter(cat => cat.showResume && cat.description && cat.description.trim() !== "");
	if (specialties.length === 0) return;

	checkPageSpace(doc, 150);
	drawSectionTitle(LABELS.specialties);

	specialties.forEach((spec) => {
		const specHeight = doc.heightOfString(spec.description, { width: 487, lineGap: 2.5 }) + 30;
		checkPageSpace(doc, specHeight);

		doc.fillColor(COLOR_PRIMARY).font('Heiti-Bold').fontSize(10);
		doc.text(spec.category, 50, doc.y);

		// Draw the accent line under the category name
		const textWidth = doc.widthOfString(spec.category);
		const lineY = doc.y + 2; // slightly below the text baseline
		doc.save();
		doc.strokeColor('#39c8d0').lineWidth(1.2);
		doc.moveTo(50, lineY).lineTo(50 + textWidth, lineY).stroke();
		doc.restore();

		doc.y = lineY + 6; // adjust spacing below the line before description

		doc.fillColor(COLOR_SECONDARY).font('Heiti').fontSize(9);
		doc.text(spec.description, 50, doc.y, { width: 487, lineGap: 2.5 });

		// Draw skills as pill tags under the description
		if (spec.skills && spec.skills.length > 0) {
			doc.y += 8;
			const startX = 50;
			const pillHeight = 15;
			const pillGapX = 6;
			const pillGapY = 5;
			const iconSize = 9;

			let currentX = startX;
			let currentY = doc.y;

			// Check space for the tags
			checkPageSpace(doc, 25);

			spec.skills.forEach((skill) => {
				// Calculate text width
				const textWidth = doc.font('Heiti').fontSize(7.5).widthOfString(skill.name);

				// Determine if icon exists
				let hasIcon = false;
				const iconPath = skill.icon ? path.join(publicDir, skill.icon) : null;
				if (iconPath && fs.existsSync(iconPath) && !iconPath.endsWith('.svg')) {
					hasIcon = true;
				}

				const pillWidth = 6 + (hasIcon ? iconSize + 4 : 0) + textWidth + 6;

				// Wrap to next line if it exceeds right margin
				if (currentX + pillWidth > 537) { // 50 + 487 = 537 is the right boundary
					currentX = startX;
					currentY += pillHeight + pillGapY;
					// Check space again
					checkPageSpace(doc, pillHeight + pillGapY);
				}

				// Draw pill background
				doc.save();
				doc.fillColor('#f3f4f6') // light gray background
					.roundedRect(currentX, currentY, pillWidth, pillHeight, 3)
					.fill();

				// Draw icon if supported
				if (hasIcon) {
					doc.image(iconPath, currentX + 6, currentY + (pillHeight - iconSize) / 2, { width: iconSize, height: iconSize });
				}

				// Draw text
				doc.fillColor('#4b5563') // gray-600
					.font('Heiti')
					.fontSize(7.5)
					.text(skill.name, currentX + 6 + (hasIcon ? iconSize + 4 : 0), currentY + 3.5, { lineBreak: false });
				doc.restore();

				currentX += pillWidth + pillGapX;
			});

			doc.y = currentY + pillHeight + 12;
		} else {
			doc.y += 12;
		}
	});
}



// 6.5 Projects (專案成就)
function drawProjects() {
	const resumeProjects = PROJECTS.filter(p => p.showResume);
	if (resumeProjects.length === 0) return;

	doc.addPage();
	drawHeaderOnNewPage(doc);
	drawSectionTitle(LABELS.projects);

	resumeProjects.forEach((proj) => {
		const descHeight = doc.heightOfString(proj.description, { width: 362, lineGap: 2 });
		const achievementsCount = proj.achievements ? proj.achievements.length : 0;
		// 移除了 features 的高度計算，稍微調整專案總高度的預估
		const projHeight = 35 + descHeight + 15 + (achievementsCount * 14) + 20;

		const heightNeeded = Math.max(projHeight, 100);
		checkPageSpace(doc, heightNeeded);

		const startY = doc.y;
		const leftX = 50;
		const leftWidth = 110;
		const rightX = 175;
		const rightWidth = 362;

		// 1. Draw Left Column (Preview Image / Collage)
		// Draw image border container
		doc.save();
		doc.strokeColor(COLOR_LINE).lineWidth(0.5);
		doc.rect(leftX, startY, leftWidth, 75).stroke();
		doc.restore();

		const mediaImages = proj.media && proj.media.images ? proj.media.images.filter(img => img.src) : [];

		function drawPlaceholder() {
			doc.save();
			doc.fillColor('#f3f4f6').rect(leftX + 1, startY + 1, leftWidth - 2, 73).fill();
			doc.fillColor(COLOR_MUTED).font('Heiti').fontSize(8);
			doc.text('No Preview', leftX, startY + 32, { width: leftWidth, align: 'center' });
			doc.restore();
		}

		if (mediaImages.length > 0) {
			const imgs = mediaImages.slice(0, 3);
			const numImgs = imgs.length;

			if (numImgs === 3) {
				const slotWidth = 34;
				const gap = 2;
				imgs.forEach((img, index) => {
					const imgPath = path.join(publicDir, img.src);
					const xPos = leftX + 2 + index * (slotWidth + gap);
					if (fs.existsSync(imgPath)) {
						doc.image(imgPath, xPos, startY + 2, {
							fit: [slotWidth, 71],
							align: 'center',
							valign: 'center'
						});
					}
				});
			} else if (numImgs === 2) {
				const slotWidth = 52;
				const gap = 2;
				imgs.forEach((img, index) => {
					const imgPath = path.join(publicDir, img.src);
					const xPos = leftX + 2 + index * (slotWidth + gap);
					if (fs.existsSync(imgPath)) {
						doc.image(imgPath, xPos, startY + 2, {
							fit: [slotWidth, 71],
							align: 'center',
							valign: 'center'
						});
					}
				});
			} else {
				const imgPath = path.join(publicDir, imgs[0].src);
				if (fs.existsSync(imgPath)) {
					doc.image(imgPath, leftX + 2, startY + 2, {
						fit: [leftWidth - 4, 71],
						align: 'center',
						valign: 'center'
					});
				} else {
					drawPlaceholder();
				}
			}
		} else if (proj.logo) {
			const logoPath = path.join(publicDir, proj.logo);
			if (fs.existsSync(logoPath)) {
				doc.image(logoPath, leftX + 2, startY + 2, {
					fit: [leftWidth - 4, 71],
					align: 'center',
					valign: 'center'
				});
			} else {
				drawPlaceholder();
			}
		} else {
			drawPlaceholder();
		}

		// 2. Draw Right Column (Text details)
		// Title with Link
		let url = proj.link;
		if (!url || url.trim() === "") {
			url = `https://kevin880701.github.io/project/${proj.slug}`;
		}

		doc.fillColor(COLOR_ACCENT).font('Heiti-Bold').fontSize(11);
		doc.text(proj.title, rightX, startY, { link: url, underline: true });
		doc.y += 4;

		// Description
		doc.fillColor(COLOR_SECONDARY).font('Heiti').fontSize(9);
		doc.text(proj.description, rightX, doc.y, { width: rightWidth, lineGap: 2 });
		doc.y += 6;

		// Achievements List
		if (proj.achievements && proj.achievements.length > 0) {
			proj.achievements.forEach((ach) => {
				doc.fillColor(COLOR_PRIMARY).font('Heiti').fontSize(8.5);
				doc.text(`•  ${ach}`, rightX + 3, doc.y, { width: rightWidth - 3, lineGap: 1.5 });
			});
			doc.y += 4;
		}

		const rightEndY = doc.y;
		const leftEndY = startY + 75;
		doc.y = Math.max(rightEndY, leftEndY) + 15;
	});
}

// 6.7 Publications (著作與論文發表)
function drawPublications() {
	if (!PUBLICATIONS || PUBLICATIONS.length === 0) return;

	checkPageSpace(doc, 150);
	drawSectionTitle('著作與論文發表');

	PUBLICATIONS.forEach((pub) => {
		const descHeight = doc.heightOfString(pub.description, { width: 500.28, lineGap: 2 });
		const pubHeight = 40 + descHeight + 15 + 15;
		checkPageSpace(doc, pubHeight);

		const startY = doc.y;

		// Left accent color bar
		doc.save();
		doc.rect(40, startY + 2, 4, 14).fillColor('#39c8d0').fill();
		doc.restore();

		// Title with link
		doc.fillColor(COLOR_ACCENT).font('Heiti-Bold').fontSize(10.5);
		doc.text(pub.title, 55, startY, { link: pub.link, underline: true });
		doc.y += 3;

		// Sub-info: Publisher | Year
		doc.fillColor(COLOR_SECONDARY).font('Heiti').fontSize(8.5);
		const subInfo = `${pub.publisher} • ${pub.year}`;
		doc.text(subInfo, 55, doc.y);
		doc.y += 6;

		// Description
		doc.fillColor(COLOR_SECONDARY).font('Heiti').fontSize(9);
		doc.text(pub.description, 55, doc.y, { width: 500.28, lineGap: 2 });
		doc.y += 4;

		// Features (Pill Tags)
		if (pub.features && pub.features.length > 0) {
			const startX = 55;
			const pillHeight = 13;
			const pillGapX = 4;
			const pillGapY = 4;

			let currentX = startX;
			let currentY = doc.y;

			pub.features.forEach((feat) => {
				const featWidth = doc.font('Heiti').fontSize(7).widthOfString(feat);
				const pillWidth = 4 + featWidth + 4;

				if (currentX + pillWidth > 537) {
					currentX = startX;
					currentY += pillHeight + pillGapY;
				}

				doc.save();
				doc.fillColor('#f3f4f6')
					.roundedRect(currentX, currentY, pillWidth, pillHeight, 2)
					.fill();

				doc.fillColor('#4b5563')
					.font('Heiti')
					.fontSize(7)
					.text(feat, currentX + 4, currentY + 2.5, { lineBreak: false });
				doc.restore();

				currentX += pillWidth + pillGapX;
			});

			doc.y = currentY + pillHeight + 12;
		} else {
			doc.y += 12;
		}
	});
}

// 7. Certifications
function drawCertifications() {
	checkPageSpace(doc, 150);
	drawSectionTitle(LABELS.certifications);

	const startY = doc.y;
	let certY = startY;

	INFO.certifications.forEach((cert) => {
		checkPageSpace(doc, 20);
		doc.font('Heiti').fontSize(9);
		doc.fillColor(COLOR_PRIMARY).text(cert.name, 50, doc.y, { continued: cert.issuer !== '' });
		if (cert.issuer) {
			doc.fillColor(COLOR_SECONDARY).text(` (${cert.issuer})`);
		} else {
			doc.text('');
		}
		doc.y += 4;
	});
}

// 8. Biography
function drawBiography() {
	checkPageSpace(doc, 150);
	drawSectionTitle(LABELS.biography);

	doc.fillColor(COLOR_PRIMARY).font('Heiti').fontSize(9.5);
	doc.text(ABOUT.description, 40, doc.y, { lineGap: 4, align: 'justify' });
}

// Utility: draw section divider & title
function drawSectionTitle(title) {
	doc.y += 10;
	const titleY = doc.y;

	// Draw Section title text
	doc.fillColor(COLOR_PRIMARY).font('Heiti-Bold').fontSize(13).text(title, 40, titleY);

	// Draw section divider line below title
	doc.save();
	doc.strokeColor(COLOR_PRIMARY).lineWidth(1.2);
	doc.moveTo(40, titleY + 18).lineTo(555.28, titleY + 18).stroke();
	doc.restore();

	doc.y = titleY + 28;
}

function getPdfLabels(language, data) {
	const isEnglish = language === 'en';
	return {
		jobTitle: isEnglish ? 'Full-Stack Engineer' : '全端工程師',
		location: isEnglish ? 'Hsinchu City' : '新竹市',
		noWorkExperience: isEnglish ? 'No work experience' : '無工作經歷',
		workExperienceYears: (years) => isEnglish ? `${years} years of work experience` : `${years}年工作經歷`,
		education: data.labels.experience.education,
		workExperience: isEnglish ? 'Work Experience' : '工作經驗',
		totalExperience: isEnglish ? 'Total Experience' : '總年資',
		specialties: isEnglish ? 'Specialties' : '專長',
		projects: isEnglish ? 'Project Achievements' : '專案成就',
		certifications: isEnglish ? 'Certifications' : '證照',
		biography: isEnglish ? 'Profile' : '個人簡介',
	};
}

async function generateResume(language, data, filename) {
	INFO = data.info;
	ABOUT = data.about;
	myEducation = data.education;
	myExperience = data.experience;
	mySkills = data.skills;
	PROJECTS = data.projects;
	PUBLICATIONS = data.publications;
	LABELS = getPdfLabels(language, data);

	const outputPath = path.join(publicDir, filename);
	const writeStream = setupDocument(outputPath);

	drawMainHeader();
	drawBiography();
	drawSpecialties();
	drawExperience();
	drawProjects();
	drawEducation();
	drawPublications();
	drawCertifications();

	doc.end();

	await new Promise((resolve) => writeStream.on('finish', resolve));
	console.log(`PDF Resume successfully generated at public/${filename}!`);
}

await generateResume('zh-TW', zhTW, 'resume.zh-TW.pdf');
await generateResume('en', en, 'resume.en.pdf');
