import React from 'react';

export const TextProvider = React.createContext();

const words = [
	{ id: 1, title: 'Content One' },
	{ id: 2, title: 'Content Two' },
	{ id: 3, title: 'Content Three' },
	{ id: 4, title: 'Content Four' },
	{ id: 5, title: 'Content Five' },
];

const TextProviderContext = ({ children }) => {
	const [currentText, setCurrentText] = React.useState('Current Text');

	const changeTextValue = () => {
		const len = words?.length;
		setCurrentText(words[Math.floor(Math.random() * len)].title);
	};

	return (
		<TextProvider.Provider value={{ currentText, changeTextValue }}>
			{children}
		</TextProvider.Provider>
	);
};

export default TextProviderContext;
