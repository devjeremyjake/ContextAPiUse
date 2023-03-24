import React from 'react';

export const ThemeProvider = React.createContext();

const ThemeProviderContext = ({ children }) => {
	const [modeValue, setModeValue] = React.useState(false);
	return (
		<ThemeProvider.Provider value={{ modeValue, setModeValue }}>
			{children}
		</ThemeProvider.Provider>
	);
};

export default ThemeProviderContext;
