import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import ModeSwitcher from '../../components/ModeSwitcher/ModeSwitcher';
import TextChanger from '../../components/TextChanger/TextChanger';
import { ThemeProvider } from '../../context/ThemeContext';
import TextProviderContext from '../../context/TextContext';

const MainPage = () => {
	const { modeValue } = React.useContext(ThemeProvider);
	return (
		<View
			style={
				modeValue
					? [styles.container, styles.darkColor]
					: [styles.container, styles.lightColor]
			}
		>
			<TextProviderContext>
				<View style={styles.centerContainer}>
					<TextChanger />
				</View>
			</TextProviderContext>

			<View style={styles.SwitcherContainer}>
				<ModeSwitcher />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	centerContainer: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	darkColor: {
		backgroundColor: '#000',
	},
	lightColor: {
		backgroundColor: '#fff',
	},
	SwitcherContainer: {
		position: 'absolute',
		bottom: 50,
		right: 20,
	},
});

export default MainPage;
