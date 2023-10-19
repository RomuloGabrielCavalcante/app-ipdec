import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import ButtonNavigator from "../../components/ButtonNavigator";
import axios from "axios";
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const HomeScreen: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	const fetchData = () => {
	// 		axios
	// 			.get("http://localhost:3003/device")
	// 			.then((response) => {
	// 				console.log("oi");

	// 				const databack = response.data;
	// 				setData(databack);
	// 				setLoading(false);
	// 			})

	// 			.catch((error) => {
	// 				console.error("Erro na requisição", error);
	// 				setLoading(false);
	// 			});
	// 	};

	// 	fetchData();
	// }, []);
	return (
		<View style={styles.container}>
			{loading ? (
				<ActivityIndicator size="large" color="#0000ff" />
			) : data.length > 0 ? (
				data.map((item: any) => (
					<ButtonNavigator
						key={item.id}
						title={item.title}
						onPress={() => {
							navigation.navigate("Detalhes do aparelho");
						}}
					/>
				))
			) : (
				<Text>Nenhum dado disponível</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default HomeScreen;
