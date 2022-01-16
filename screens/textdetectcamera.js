/* eslint-disable prettier/prettier */
import React from "react";
import { connect } from "react-redux";
import { useRef, useState } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	LogBox,
	Image,
} from "react-native";
import { RNCamera } from "react-native-camera";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function Camera(props) {
	const [type_camera, setType_camera] = useState(RNCamera.Constants.Type.back);
	const [type_flash, setType_flash] = useState(
		RNCamera.Constants.FlashMode.off
	);
	const [flash_img, setFlash_img] = useState(
		require("../camera/src/img/flash.png")
	);

	const [id, setID] = useState();
	const [textDetect, setTextDetect] = useState();

	console.log("awais>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", id);
	const camera = useRef(null);

	const camera_change = () => {
		if (type_camera === RNCamera.Constants.Type.front) {
			setType_camera(RNCamera.Constants.Type.back);
		} else {
			setType_camera(RNCamera.Constants.Type.front);
		}
	};

	const flash_change = () => {
		if (type_flash === RNCamera.Constants.FlashMode.off) {
			setType_flash(RNCamera.Constants.FlashMode.on);
			setFlash_img(require("../camera/src/img/flash.png"));
		} else {
			setType_flash(RNCamera.Constants.FlashMode.off);
			setFlash_img(require("../camera/src/img/flash_off.png"));
		}
	};
	return (
		<View style={styles.container}>
			<RNCamera
				ref={camera}
				style={styles.preview}
				flashMode={type_flash}
				type={type_camera}
				onTextRecognized={(e, index) => {
					if (e.textBlocks) {
						setID(id, e.textBlocks);

						console.log("detected text is:", e.textBlocks);
						e.textBlocks.map;
						//setTextDetect(e.value);
						//console.log(textDetect);
					} else {
						console.log("none");
					}
				}}
			>
				<View style={styles.capture}>
					<TouchableOpacity onPress={() => camera_change()}>
						<Image
							style={{ width: 40, height: 50, resizeMode: "contain" }}
							source={require("../camera/src/img/flip.png")}
						/>
					</TouchableOpacity>

					<TouchableOpacity activeOpacity={0.3} style={styles.capture_button}>
						<FontAwesome5
							style={{}}
							name={"circle"}
							size={69}
							color={"white"}
							pro
						/>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => flash_change()}>
						<Image
							style={{ width: 40, height: 50, resizeMode: "contain" }}
							source={flash_img}
						/>
					</TouchableOpacity>
				</View>
			</RNCamera>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "black",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	preview: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		width: "100%",
		backgroundColor: "blue",
	},
	capture: {
		flex: 0,
		borderRadius: 5,
		padding: 15,
		paddingHorizontal: 20,
		alignSelf: "center",
		margin: 20,
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	capture_button: {
		flex: 0,
		flexDirection: "row",
		justifyContent: "center",
		borderRadius: 90,
		//  backgroundColor:'black',
		opacity: 0.9,
	},
});

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Camera);
