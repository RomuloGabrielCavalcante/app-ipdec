import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const BotaoGps: React.FC = () => {
	return (
		<TouchableOpacity
			style={styles.botao}
			onPress={() => {
				Alert.alert("Coringuei");
			}}
		>
			<Text>Entrar</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	botao: {
		backgroundColor: "#808080",
		width: "90%",

		height: 60,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default BotaoGps;
