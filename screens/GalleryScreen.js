import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Platform,
	Image,
	StyleSheet,
	Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import TextRecognition from "react-native-text-recognition";

const GalleryScreen = () => {
	const [image, setImage] = useState(null);
	const [text, setText] = useState(null);

	useEffect(async () => {
		if (Platform.OS !== "web") {
			const { status } =
				await ImagePicker.requestMediaLibraryPermissionsAsync();

			if (status !== "granted") {
				alert("Permission denied!");
			}
		}
	});

	const PickImage = async () => {
		let result = await TextRecognition.recognize(
			ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				aspect: [4, 3],
				quality: 1,
			})
		);
		console.log(result);

		setText(result);
		if (!result.cancelled) {
			setImage(result.uri);
		}
	};
	return (
		<View style={styles.container}>
			<Text style={styles.instruction}>
				To scan a photo, press the button below!
			</Text>

			<TouchableOpacity style={styles.button} onPress={() => PickImage()}>
				<Text style={styles.buttonText}>Pick a photo</Text>
			</TouchableOpacity>
			{image && (
				<Image
					source={{ uri: image }}
					style={{
						width: 300,
						height: 200,
					}}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
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
		color: "#fff",
	},
	logo: {
		width: 240,
		height: 200,
		marginBottom: 8,
	},
	instruction: {
		color: "#888",
		fontSize: 18,
		marginHorizontal: 15,
		marginBottom: 10,
	},
});

export default GalleryScreen;
