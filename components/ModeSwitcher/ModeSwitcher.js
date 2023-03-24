import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import { Entypo } from '@expo/vector-icons';

const ModeSwitcher = () => {
	const { modeValue, setModeValue } = React.useContext(ThemeProvider);

	const switchMode = () => {
		setModeValue((previous) => !previous);
	};
	return (
		<TouchableWithoutFeedback onPress={switchMode}>
			<View style={styles.container}>
				<Entypo
					name={modeValue ? 'light-up' : 'moon'}
					size={24}
					color={modeValue ? 'white' : 'black'}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 10,
		borderColor: '#eee',
		borderRadius: 50,
		padding: 2,
	},
});

export default ModeSwitcher;
