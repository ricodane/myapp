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
import { useIsFocused } from "@react-navigation/native";

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
		cone: {
			diffuseTexture: require("../assets/conetexture.jpg"),
		},
		eggplant: {
			diffuseTexture: require("../assets/eggplanttexture.png"),
		},
		sack: {
			diffuseTexture: require("../assets/sakotexture.jpg"),
		},
		can: {
			diffuseTexture: require("../assets/can.jpg"),
		},
		bow: {
			diffuseTexture: require("../assets/bow.png"),
		},
		frog: {
			diffuseTexture: require("../assets/frog.png"),
		},
		milk: {
			diffuseTexture: require("../assets/milk.png"),
		},
		leaf: {
			diffuseTexture: require("../assets/leaf.png"),
		},
		stair: {
			diffuseTexture: require("../assets/stair.jpg"),
		},
		fish: {
			diffuseTexture: require("../assets/fish.jpg"),
		},
		pillow: {
			diffuseTexture: require("../assets/pillow.png"),
		},
		radio: {
			diffuseTexture: require("../assets/radio.jpg"),
		},
		key: {
			diffuseTexture: require("../assets/key.jpg"),
		},
		comb: {
			diffuseTexture: require("../assets/comb.png"),
		},
		cup: {
			diffuseTexture: require("../assets/cup.png"),
		},
		bull: {
			diffuseTexture: require("../assets/toro.jpg"),
		},
		jar: {
			diffuseTexture: require("../assets/jar.png"),
		},
		egg: {
			diffuseTexture: require("../assets/egg.jpg"),
		},
		skirt: {
			diffuseTexture: require("../assets/skirt.png"),
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
				<Viro3DObject
					source={require("../assets/eye.obj")}
					position={[0, 0, -6]}
					rotation={[100, 100, 0]}
					scale={[0.5, 0.5, 0.5]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["eye"]}
					type="OBJ"
				/>
			) : data.object === "cone" ? (
				<Viro3DObject
					source={require("../assets/cone.obj")}
					position={[0, -1, -4]}
					rotation={[0, 50, 0]}
					scale={[0.6, 0.6, 0.6]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["cone"]}
					type="OBJ"
				/>
			) : data.object === "eggplant" ? (
				<Viro3DObject
					source={require("../assets/eggplant.obj")}
					position={[0, -1.5, -8]}
					rotation={[0, 50, 0]}
					scale={[0.4, 0.4, 0.4]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["eggplant"]}
					type="OBJ"
				/>
			) : data.object === "sack" ? (
				<Viro3DObject
					source={require("../assets/sako.obj")}
					position={[0, -1, -3]}
					rotation={[0, 50, 0]}
					scale={[0.5, 0.5, 0.5]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["sack"]}
					type="OBJ"
				/>
			) : data.object === "can" ? (
				<Viro3DObject
					source={require("../assets/can.obj")}
					position={[0, -1, -2]}
					rotation={[0, 50, 0]}
					scale={[0.5, 0.5, 0.5]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["can"]}
					type="OBJ"
				/>
			) : data.object === "bow" ? (
				<Viro3DObject
					source={require("../assets/bow.obj")}
					position={[0, 0, -1]}
					rotation={[0, 50, 0]}
					scale={[0.05, 0.05, 0.05]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["bow"]}
					type="OBJ"
				/>
			) : data.object === "frog" ? (
				<Viro3DObject
					source={require("../assets/frog.obj")}
					position={[0, 0, -1]}
					rotation={[0, 40, 0]}
					scale={[0.05, 0.05, 0.05]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["frog"]}
					type="OBJ"
				/>
			) : data.object === "milk" ? (
				<Viro3DObject
					source={require("../assets/milk.obj")}
					position={[0, -0.5, -2]}
					rotation={[0, 40, 0]}
					scale={[0.03, 0.03, 0.03]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["milk"]}
					type="OBJ"
				/>
			) : data.object === "leaf" ? (
				<Viro3DObject
					source={require("../assets/leaf.obj")}
					position={[0, -1, -10]}
					rotation={[5, 40, 0]}
					scale={[0.8, 0.8, 0.8]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["leaf"]}
					type="OBJ"
				/>
			) : data.object === "stair" ? (
				<Viro3DObject
					source={require("../assets/stair.obj")}
					position={[0, 0, -9]}
					rotation={[5, 70, 0]}
					scale={[0.03, 0.03, 0.03]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["stair"]}
					type="OBJ"
				/>
			) : data.object === "fish" ? (
				<Viro3DObject
					source={require("../assets/fish.obj")}
					position={[0, 0, -1]}
					rotation={[35, 40, 0]}
					scale={[0.9, 0.9, 0.9]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["fish"]}
					type="OBJ"
				/>
			) : data.object === "pillow" ? (
				<Viro3DObject
					source={require("../assets/pillow.obj")}
					position={[0, -1, -6]}
					rotation={[5, 40, 0]}
					scale={[0.3, 0.3, 0.3]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["pillow"]}
					type="OBJ"
				/>
			) : data.object === "radio" ? (
				<Viro3DObject
					source={require("../assets/radio.obj")}
					position={[0, -1, -6]}
					rotation={[0, 40, 0]}
					scale={[0.3, 0.3, 0.3]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["radio"]}
					type="OBJ"
				/>
			) : data.object === "key" ? (
				<Viro3DObject
					source={require("../assets/key.obj")}
					position={[0, 0, -15]}
					rotation={[35, 40, 0]}
					scale={[0.01, 0.01, 0.01]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["key"]}
					type="OBJ"
				/>
			) : data.object === "comb" ? (
				<Viro3DObject
					source={require("../assets/comb.obj")}
					position={[0, -1, -11]}
					rotation={[100, 40, 0]}
					scale={[0.06, 0.06, 0.06]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["comb"]}
					type="OBJ"
				/>
			) : data.object === "cup" ? (
				<Viro3DObject
					source={require("../assets/cup.obj")}
					position={[0, -0.5, -2]}
					rotation={[0, 40, 0]}
					scale={[0.05, 0.05, 0.05]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["cup"]}
					type="OBJ"
				/>
			) : data.object === "bull" ? (
				<Viro3DObject
					source={require("../assets/toro.obj")}
					position={[0, 0, -3]}
					rotation={[-85, 40, 0]}
					scale={[0.3, 0.3, 0.3]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["bull"]}
					type="OBJ"
				/>
			) : data.object === "jar" ? (
				<Viro3DObject
					source={require("../assets/jar.obj")}
					position={[0, -2, -5]}
					rotation={[0, 40, 0]}
					scale={[0.25, 0.25, 0.25]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["jar"]}
					type="OBJ"
				/>
			) : data.object === "egg" ? (
				<Viro3DObject
					source={require("../assets/egg.obj")}
					position={[0, 6, -15]}
					rotation={[0, 40, 0]}
					scale={[0.1, 0.1, 0.1]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["egg"]}
					type="OBJ"
				/>
			) : data.object === "skirt" ? (
				<Viro3DObject
					source={require("../assets/skirt.obj")}
					position={[0, -1, -3]}
					rotation={[0, 40, 0]}
					scale={[1, 1, 1]}
					animation={{ name: "rotate", loop: true, run: true }}
					materials={["skirt"]}
					type="OBJ"
				/>
			) : (
				<ViroText
					text={"Object Not found!"}
					textAlign={"left"}
					textAlignVertical={"top"}
					textLineBreakMode={"Justify"}
					position={[0, 1, -3]}
					style={{
						fontSize: 26,
						fontFamily: "Arial",

						color: "red",
					}}
				/>
			)}
		</ViroARScene>
	);
};

const CameraScreen = () => {
	const [image, setImage] = useState(null);
	const [text, setText] = useState();
	const [object, setObject] = useState();
	const isFocused = useIsFocused();

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
