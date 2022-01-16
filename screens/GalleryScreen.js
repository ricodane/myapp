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
	Alert,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import TextRecognition from "react-native-text-recognition";

const GalleryScreen = () => {
	const [image, setImage] = useState(null);
	const [textDefault, setText] = useState();
	const [object, setObject] = useState("");

	useEffect(() => {
		(async () => {
			if (image) {
				const result = await TextRecognition.recognize(image.assets[0].uri);

				console.log(result);

				setText(result);

				let lowerCaseText = result.toString().toLowerCase();

				console.log(lowerCaseText);

				setObject(lowerCaseText);
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
			<TouchableOpacity style={styles.button} onPress={() => chooseFile(null)}>
				<Text style={styles.buttonText}>Pamili ug imahe</Text>
			</TouchableOpacity>
			<Text style={{ fontSize: 32 }}>{textDefault}</Text>
			{object == "mata" ? (
				<Image source={require("../assets/images/mata.jpg")} />
			) : object == "apa" ? (
				<Image source={require("../assets/images/apa.jpg")} />
			) : object == "talong" ? (
				<Image source={require("../assets/images/talong.jpg")} />
			) : object == "sako" ? (
				<Image source={require("../assets/images/sako.jpg")} />
			) : object == "lata" ? (
				<Image source={require("../assets/images/lata.jpg")} />
			) : object == "pana" ? (
				<Image source={require("../assets/images/pana.jpg")} />
			) : object == "baki" ? (
				<Image source={require("../assets/images/baki.jpg")} />
			) : object == "gatas" ? (
				<Image source={require("../assets/images/gatas.jpg")} />
			) : object == "dahon" ? (
				<Image source={require("../assets/images/dahon.png")} />
			) : object == "hagdan" ? (
				<Image source={require("../assets/images/hagdan.jpg")} />
			) : object == "isda" ? (
				<Image source={require("../assets/images/isda.png")} />
			) : object == "unlan" ? (
				<Image source={require("../assets/images/unlan.jpg")} />
			) : object == "radyo" ? (
				<Image source={require("../assets/images/radyo.jpg")} />
			) : object == "yabi" ? (
				<Image source={require("../assets/images/yabi.jpg")} />
			) : object == "sudlay" ? (
				<Image source={require("../assets/images/sudlay.jpg")} />
			) : object == "basu" ? (
				<Image source={require("../assets/images/basu.jpg")} />
			) : object == "bula" ? (
				<Image source={require("../assets/images/bula.jpg")} />
			) : object == "garapon" ? (
				<Image source={require("../assets/images/garapon.jpg")} />
			) : object == "ublung" ? (
				<Image source={require("../assets/images/ublung.png")} />
			) : object == "sayal" ? (
				<Image source={require("../assets/images/sayal.jpg")} />
			) : (
				<Text>Cannot display object for that word! Try again!</Text>
			)}
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
