/* eslint-disable prettier/prettier */
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
import { launchImageLibrary } from "react-native-image-picker";
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

const GalleryScreen = () => {
	const [image, setImage] = useState(null);
	const [text, setText] = useState();
	const [object, setObject] = useState();

	useEffect(() => {
		(async () => {
			if (image) {
				const result = await TextRecognition.recognize(image.assets[0].uri);

				console.log(result);

				setText(result);
			}
		})();
	}, [image]);

	const chooseFile = () => {
		launchImageLibrary(
			{
				allowsEditing: true,
				aspect: [4, 3],
				quality: 1,
			},
			setImage
		);
	};

	return (
		<View style={styles.container}>
			<Text>Text Recognition</Text>
			<TouchableOpacity style={styles.button} onPress={() => chooseFile()}>
				<Text style={styles.buttonText}>Pick a photo</Text>
			</TouchableOpacity>

			{text ? <Text>{text}</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 8,
		alignItems: "center",
		marginBottom: 8,
	},
	buttonText: {
		fontSize: 20,
	},
});

export default GalleryScreen;
