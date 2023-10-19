import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Device from "../pages/Device";
import HomeScreen from "../pages/Home";

const NativeStack = createNativeStackNavigator();

const AppRoutes = (): React.ReactNode => {
	return (
		<NativeStack.Navigator screenOptions={{ headerShown: true }}>
			<NativeStack.Screen name="Lista de Aparelhos" component={HomeScreen} />
			<NativeStack.Screen name="Detalhes do aparelho" component={Device} />
		</NativeStack.Navigator>
	);
};

export default AppRoutes;
