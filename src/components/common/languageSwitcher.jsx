import React from "react";

import { useI18n } from "../../i18n/LanguageContext";
import "./styles/languageSwitcher.css";

const LanguageSwitcher = () => {
	const { language, setLanguage } = useI18n();
	const nextLanguage = language === "zh-TW" ? "en" : "zh-TW";

	return (
		<button
			type="button"
			className="language-switcher"
			onClick={() => setLanguage(nextLanguage)}
			aria-label="Switch language"
		>
			{nextLanguage === "en" ? "EN" : "中文"}
		</button>
	);
};

export default LanguageSwitcher;
