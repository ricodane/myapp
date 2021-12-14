import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import GalleryScreen from "./GalleryScreen";
import CameraScreen from "./CameraScreen";
import Screens from "./Screens";

const Stack = createStackNavigator();

const FirstScreenNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Homescreen" component={HomeScreen} />
			<Stack.Screen name="Screens" component={Screens} />
		</Stack.Navigator>
	);
};

export { FirstScreenNavigator };

const SecondScreenNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Camerascreen" component={CameraScreen} />
			<Stack.Screen name="Screens" component={Screens} />
		</Stack.Navigator>
	);
};

export { SecondScreenNavigator };

const ThirdScreenNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Galleryscreen" component={GalleryScreen} />
			<Stack.Screen name="Screens" component={Screens} />
		</Stack.Navigator>
	);
};

export { ThirdScreenNavigator };
