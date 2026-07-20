import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import en from "./translations/en";
import zhTW from "./translations/zh-TW";

const LANGUAGE_STORAGE_KEY = "site-language";

const dictionaries = {
	"zh-TW": zhTW,
	en,
};

const DEFAULT_LANGUAGE = "zh-TW";
const supportedLanguages = Object.keys(dictionaries);

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const location = useLocation();
	const navigate = useNavigate();

	const [language, setLanguageState] = useState(() => {
		const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
		return dictionaries[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;
	});

	useEffect(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const languageFromPath = pathParts[0];

		if (dictionaries[languageFromPath]) {
			localStorage.setItem(LANGUAGE_STORAGE_KEY, languageFromPath);
			setLanguageState(languageFromPath);
			return;
		}

		const nextPath = `/${DEFAULT_LANGUAGE}${location.pathname === "/" ? "" : location.pathname}${location.search}${location.hash}`;
		navigate(nextPath, { replace: true });
	}, [location.hash, location.pathname, location.search, navigate]);

	const value = useMemo(() => {
		const setLanguage = (nextLanguage) => {
			if (!dictionaries[nextLanguage]) return;
			localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
			setLanguageState(nextLanguage);

			const pathParts = location.pathname.split("/").filter(Boolean);
			const hasLanguagePrefix = dictionaries[pathParts[0]];
			const pathWithoutLanguage = hasLanguagePrefix
				? `/${pathParts.slice(1).join("/")}`
				: location.pathname;
			const nextPath = `/${nextLanguage}${pathWithoutLanguage === "/" ? "" : pathWithoutLanguage}${location.search}${location.hash}`;
			navigate(nextPath, { replace: false });
		};

		const localizedPath = (path = "/") => {
			if (!path.startsWith("/")) return path;

			const pathParts = path.split("/").filter(Boolean);
			if (dictionaries[pathParts[0]]) return path;

			return `/${language}${path === "/" ? "" : path}`;
		};

		return {
			language,
			supportedLanguages,
			setLanguage,
			localizedPath,
			data: dictionaries[language],
		};
	}, [language, location.hash, location.pathname, location.search, navigate]);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useI18n = () => {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error("useI18n must be used within LanguageProvider");
	}

	return context;
};
