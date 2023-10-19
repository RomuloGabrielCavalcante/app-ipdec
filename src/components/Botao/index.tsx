import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const BotaoGps: React.FC = () => {
	return (
		<TouchableOpacity style={styles.botao}>
			<Text style={styles.text}>Aparelho 1</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	botao: {
		backgroundColor: "#009000",
		width: "90%",
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		borderColor: "blue",
		borderWidth: 2,
	},
	text: {
		color: "white",
	},
});

export default BotaoGps;
