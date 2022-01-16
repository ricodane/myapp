import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import React from "react";
import { name as appName } from "./app.json";
import { registerRootComponent } from "expo";
import store from "../myapp/src/store/index";

const RNRedux = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
registerRootComponent(App);
