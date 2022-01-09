import React, { useState, useEffect } from "react";
import {
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
	Platform,
	Image,
	StyleSheet,
	Button,
} from "react-native";

import TextRecognition from "react-native-text-recognition";
import {
	ViroARScene,
	ViroText,
	ViroConstants,
	ViroARSceneNavigator,
	ViroBox,
	ViroMaterials,
	ViroAnimations,
	Viro3DObject,
	ViroAmbientLight,
} from "@viro-community/react-viro";

const InitialScene = (props) => {
	let data = props.sceneNavigator.viroAppProps;
	ViroMaterials.createMaterials({
		eye: {
			diffuseTexture: require("../assets/eyeTextureNew2.jpg"),
		},
		toro: {
			diffuseTexture: require("../assets/toro.jpg"),
		},
	});

	ViroAnimations.registerAnimations({
		rotate: {
			duration: 2500,
			properties: {
				rotateY: "+=90",
			},
		},
	});
	return (
		<ViroARScene>
			<ViroAmbientLight color="#ffffff" />
			{data.object === "eye" ? (
				<ViroText
					text={"Here"}
					position={[0, 1, -3]}
					style={{ fontSize: 80, fontFamily: "Arial", color: "red" }}
				/>
			) : (
				<Viro3DObject
					source={require("../assets/toro.obj")}
					position={[0, 0, -6]}
					rotation={[100, 100, 0]}
					scale={[0.5, 0.5, 0.5]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["toro"]}
					type="OBJ"
				/>
			)}
		</ViroARScene>
	);
};

const CameraScreen = () => {
	const [image, setImage] = useState(null);
	const [text, setText] = useState();
	const [object, setObject] = useState();

	return (
		<View style={styles.container}>
			<ViroARSceneNavigator
				initialScene={{
					scene: InitialScene,
				}}
				viroAppProps={{ object: object }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scanText: {
		fontSize: 20,
		fontFamily: "Roboto",
		fontWeight: "normal",
	},
	text: {
		fontSize: 18,
		color: "white",
	},
	modal: {
		flex: 1,
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	captureButton: {
		position: "absolute",
		left: 156,
		bottom: 28,
		width: 48,
		zIndex: 50,
		height: 30,
		backgroundColor: "#FFE5D8",
		borderRadius: 7,
	},
	modalContent: {
		alignItems: "center",
		justifyContent: "center",
		width: 300,
		height: 300,
		borderRadius: 24,
		backgroundColor: "gray",
	},
	dismissButton: {
		width: 150,
		height: 50,
		marginTop: 60,
		borderRadius: 24,
		color: "white",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "red",
	},
});

export default CameraScreen;
