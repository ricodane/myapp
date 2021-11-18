import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { Button } from "react-native-paper";
import ImagePicker from "react-native-image-crop-picker";

const [image, setImage] = useState("");

const uploadImage = () => {
	ImagePicker.openPicker({
		width: 300,
		height: 400,
		cropping: true,
	}).then((image) => {
		console.log(image);
	});
};

launchImageLibrary(options, (response) => {
	if (response.didCancel) {
		Alert.alert("User cancelled access to gallery");
	} else if (response.errorCode == "permission") {
		Alert.alert("permission not satisfied");
	} else if (response.errorCode == "others") {
		console.log("others");
	} else if (response.assets[0].fileSize > 2097152) {
		Alert.alert("Maximum image size exceed", "Please choose another image", [
			{ text: "OK" },
		]);
	}
});

const GalleryScreen = () => {
	return (
		<View>
			<TouchableOpacity onPress={() => uploadImage()}>
				<Text>Upload Image</Text>
			</TouchableOpacity>
		</View>
	);
};

export default GalleryScreen;
