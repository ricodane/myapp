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
				<ViroText
					text={"None"}
					position={[0, 1, -3]}
					style={{ fontSize: 80, fontFamily: "Arial", color: "red" }}
				/>
			)}
		</ViroARScene>
	);
};

const GalleryScreen = () => {
	const [image, setImage] = useState(null);
	const [text, setText] = useState("Kabo");
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
			<ViroARSceneNavigator
				initialScene={{
					scene: InitialScene,
				}}
				viroAppProps={{ object: object }}
			/>
			<Text>Text Recognition</Text>
			<TouchableOpacity style={styles.button} onPress={() => chooseFile()}>
				<Text style={styles.buttonText}>Pick a photo</Text>
			</TouchableOpacity>

			{text ? <Text>{text}</Text> : null}
			{text === "Sako" ? (
				setObject("eye")
			) : text === "Kabo" ? (
				<Text>lezgo2</Text>
			) : (
				<Text>here</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
