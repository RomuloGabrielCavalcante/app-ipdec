// 	const [senha, setSenha] = useState<string>("");
// const passRef = useRef<OrginalTextInput>(null);

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Gps: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Gps</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 20,
	},
});

export default Gps;
