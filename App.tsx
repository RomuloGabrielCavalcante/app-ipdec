import React from "react";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BotaoGps from "./src/components/Botao";

const Separator: React.FC = () => <View style={styles.separator} />;

export const App: React.FC = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<Text>Lista de aparelhos conectados:</Text>
				<BotaoGps></BotaoGps>

				<StatusBar style="auto" />
				<Separator />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		flex: 1,
		backgroundColor: "white",
		marginTop: 20,
		margin: 8,
	},
	separator: {
		marginVertical: 8,
		borderBottomColor: "#737373",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});

export default App;
