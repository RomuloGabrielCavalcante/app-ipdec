// import React from "react";

// import { StatusBar } from "expo-status-bar";
// import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import BotaoGps from "./src/components/Botao";

// const Separator: React.FC = () => <View style={styles.separator} />;

// export const App: React.FC = () => {
// 	return (
// 		<SafeAreaView style={styles.areaSafe}>
// 			<View style={styles.container}>
// 				<Text style={styles.text}>Lista de aparelhos conectados:</Text>
// 				<BotaoGps
// 					onPress={() => {
// 						navigation.navigate("Register");
// 					}}
// 				></BotaoGps>

// 				<StatusBar style="auto" />
// 				<Separator />
// 			</View>
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		width: "100%",
// 		height: "100%",
// 		flex: 1,
// 		backgroundColor: "white",
// 		marginTop: 20,
// 		margin: 8,
// 	},
// 	separator: {
// 		marginVertical: 8,
// 		borderBottomColor: "#737373",
// 		borderBottomWidth: StyleSheet.hairlineWidth,
// 	},
// 	text: {
// 		color: "black",
// 		fontSize: 20,
// 		flex: 0,
// 		flexDirection: "column",
// 	},
// 	areaSafe: {
// 		width: "105%",
// 		height: "12%",
// 		flex: 1,
// 		marginTop: 20,
// 	},
// });

// export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Routes from "./src/routes";

const App: React.FC = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				{/* <AppProvider> */}
				<Routes />
				{/* </AppProvider> */}
			</NavigationContainer>
		</GestureHandlerRootView>
	);
};

export default App;
