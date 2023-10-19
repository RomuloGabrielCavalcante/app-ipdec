import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonNavigatorProps {
	title: string;
	onPress: () => void;
}

const ButtonNavigator: React.FC<ButtonNavigatorProps> = ({ title, onPress }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: "95%",
		padding: 10,
		backgroundColor: "#007BFF",
		borderRadius: 5,
		margin: 5,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		textAlign: "center",
	},
});

export default ButtonNavigator;
