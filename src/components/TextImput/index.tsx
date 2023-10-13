import React from "react";
import {
	type TextInput as OriginalTextInput,
	View,
	Text,
	StyleSheet,
	type TextInputProps,
	type ViewStyle,
} from "react-native";

interface Props extends TextInputProps {
	label: string;
	stylesContainer?: ViewStyle;
}

const AreaDeDigitacao = (
	{ label, stylesContainer, ...rest }: Props,
	ref: React.FC<OriginalTextInput>
): React.ReactNode => {
	// const [text, onChangeText] = React.useState("Useless Text");

	return (
		<View style={{ ...styles.container, ...stylesContainer }}>
			<Text style={styles.label}>{label}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	container: {},
	label: {},
});

export default AreaDeDigitacao;
