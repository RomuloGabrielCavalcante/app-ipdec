// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";
// import axios from "axios"; // Importe o Axios
// import ButtonNavigator from "../../components/ButtonNavigator";
// import { api } from "../../service/api";

// const Home: React.FC = () => {
// 	const [data, setData] = useState([]);
// 	const BackendURL = process.env.BACKEND_URL;
// 	useEffect(() => {
// 		const fetchDataFromBackend = async () => {
// 			try {
// 				// Use a URL construída com base na variável de ambiente BACKEND_URL
// 				const { data } = await api.get("/device");
// 				console.log(`${process.env.BACKEND_URL}/device`);
// 				console.log(data);
// 				setData(data); // Atualize o estado com os dados recebidos do backend
// 			} catch (error) {
// 				console.log(`${BackendURL}`);
// 				console.error("Erro ao buscar dados do backend:", error);
// 			}
// 		};

// 		void fetchDataFromBackend();
// 	}, []);

// 	const renderItem = ({ item }) => (
// 		<ButtonNavigator
// 			title={item.title}
// 			onPress={() => {
// 				console.log(item.title);
// 			}}
// 		/>
// 	);

// 	return (
// 		<View style={styles.container}>
// 			<Text>Home</Text>
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
