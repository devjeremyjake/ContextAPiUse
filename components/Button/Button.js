import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ onPress, title }) => {
	return (
		<TouchableOpacity activeOpacity={0.2} onPress={onPress}>
			<View style={styles.container}>
				<Text style={styles.buttonText}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ae561cb4',
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500',
	},
});

export default Button;
