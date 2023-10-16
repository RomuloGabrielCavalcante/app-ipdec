import { createStackNavigator } from "react-navigation-stack";
import App from "../../../App"; // Importe sua tela inicial
import Gps from "../Gps"; // Importe a tela de destino

const AppNavigator = createStackNavigator(
	{
		AppPagina: App,
		GpsPagina: Gps,
	},
	{
		initialRouteName: "AppPagina", // Defina a tela inicial
	}
);

export default AppNavigator;
