// import React from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";
// import ButtonNavigator from "../../components/ButtonNavigator";
// import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useNavigation } from "@react-navigation/native";

// const Home = () => {
// 	const data = Array.from({ length: 10 }, (v, i) => ({
// 		id: i + 1,
// 		title: `Item ${i + 1}`,
// 	}));

// 	const renderItem = ({ item }) => (
// 		<ButtonNavigator
// 			title={item.title}
// 			onPress={() => {
// 				console.log(`Clicou em ${item.title}`);
// 				navigation.navigate("Device");
// 			}}
// 		/>
// 	);

// 	const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

// 	return (
// 		<View style={styles.container}>
// 			<Text>Lista de Itens</Text>
// 			<FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });

// export default Home;
