import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TextProvider } from '../../context/TextContext';
import { ThemeProvider } from '../../context/ThemeContext';
import Button from '../../components/Button/Button';

const TextChanger = () => {
	const { currentText, changeTextValue } = React.useContext(TextProvider);
	const { modeValue } = React.useContext(ThemeProvider);
	return (
		<View>
			<Text
				style={
					modeValue
						? [styles.mainText, styles.lightColor]
						: [styles.mainText, styles.darkColor]
				}
			>
				{currentText}
			</Text>
			<Button title="Press to change" onPress={() => changeTextValue()} />
		</View>
	);
};

const styles = StyleSheet.create({
	mainText: {
		fontSize: 18,
		fontWeight: '500',
		letterSpacing: 2,
		textAlign: 'center',
		marginBottom: 20,
	},
	lightColor: {
		color: '#FFFFFF',
	},
	darkColor: {
		color: '#000000',
	},
});

export default TextChanger;
