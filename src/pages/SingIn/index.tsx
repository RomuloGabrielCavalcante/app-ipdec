// import type React from "react";
// import { useRef, useState } from "react";
// import { StyleSheet, View } from "react-native";
// import AreaDeDigitacao from "../../components/TextImput";

// const SignIn: React.FC = () => {
// 	// const { signIn } = useAuth();
// 	const [email, setEmail] = useState<string>("");
// 	const [senha, setSenha] = useState<string>("");
// const passRef = useRef<OrginalTextInput>(null);

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Signin: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text>Signin</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});
export default Signin;
