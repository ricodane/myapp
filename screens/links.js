import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ScrollView,
	SafeAreaView,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import Hyperlink from "react-native-hyperlink";

const SCREEN_WIDTH = Dimensions.get("window").width;

const DATA = [
	{
		id: 1,
		text: "https://sketchfab.com/3d-models/eye-07c3674cfc26460d803f8f497f8c0f35",
		text2: "https://sketchfab.com/germydan",
	},
	{
		id: 2,
		text: "https://www.cgtrader.com/free-3d-models/food/miscellaneous/ice-cream-189af072-88d3-44c8-aebe-118bc5fc8c98",
		text2: "https://www.cgtrader.com/berjo",
	},
	{
		id: 3,
		text: "https://sketchfab.com/3d-models/eggplant-691d0e4cb6a1409ea72d960d0ab144ea",
		text2: "https://sketchfab.com/nodoxi",
	},
	{
		id: 4,
		text: "https://sketchfab.com/3d-models/canvas-sack-a0a690f8d2fe4899b6ae3324ca6dd744",
		text2: "https://sketchfab.com/AmericanKilometers",
	},
	{
		id: 5,
		text: "https://www.cgtrader.com/items/2656985/download-page",
		text2: "https://www.cgtrader.com/sdipietro",
	},
	{
		id: 6,
		text: "https://sketchfab.com/3d-models/elder-crystal-bow-polypaint-e3b58d6553f14f1eb353a311734cec1a",
		text2: "https://sketchfab.com/janchristian",
	},
	{
		id: 7,
		text: "https://sketchfab.com/3d-models/frog-ebc42901b4d44ef284da6df23c401312",
		text2: "https://sketchfab.com/Micow.Chiang",
	},
	{
		id: 8,
		text: "https://sketchfab.com/3d-models/lowpoly-milk-91492741c1fe4b5b80c89d8202664cd5",
		text2: "https://sketchfab.com/beewee",
	},
	{
		id: 9,
		text: "https://sketchfab.com/3d-models/a-single-plant-leaf-5d1d3453adb94e3e88c8658ae4736ac9",
		text2: "https://sketchfab.com/mellydeeis",
	},
	{
		id: 10,
		text: "https://sketchfab.com/3d-models/stair-block-7ab033454cb94238a952ad03cd61c95c",
		text2: "https://sketchfab.com/Julien_van_Beek",
	},
	{
		id: 11,
		text: "https://sketchfab.com/3d-models/fish-shaped-besamin-box-e1c73c6804604c19bb5de01a0d8cec62",
		text2: "https://sketchfab.com/WirtualneMuzeaMalopolski",
	},
	{
		id: 12,
		text: "https://sketchfab.com/3d-models/ashley-homestore-pillow-flower-e077e53e43b44004b1a9375fd919ec1f#download",
		text2: "https://sketchfab.com/R.Miha.H",
	},
	{
		id: 13,
		text: "https://sketchfab.com/3d-models/philips-radio-46bdaf3fb5cc47b2a7c3f273433dc0dd#download",
		text2: "https://sketchfab.com/thesidekick",
	},
	{
		id: 14,
		text: "https://sketchfab.com/3d-models/key-a4aca11a2259462f8735a60eead33962",
		text2: "https://sketchfab.com/eucocker",
	},
	{
		id: 15,
		text: "https://sketchfab.com/3d-models/ivory-comb-eed85f1f45954ea5bfba7655ceda2ae9",
		text2: "https://sketchfab.com/elsa2297.ice",
	},
	{
		id: 16,
		text: "https://sketchfab.com/3d-models/japanese-tea-cup-506f16847d0a4565bdf5d4fa4c358546",
		text2: "https://sketchfab.com/fengyuan20000303",
	},
	{
		id: 17,
		text: "https://sketchfab.com/3d-models/plastic-toy-bull-rawscan-100ae8c4371848f0804907e008d5eedf#download",
		text2: "https://sketchfab.com/spogna",
	},
	{
		id: 18,
		text: "https://sketchfab.com/3d-models/jar-c8e4632c86fa4245b89a1bcb64fc9562#download",
		text2: "https://sketchfab.com/mounica.choco9",
	},
	{
		id: 19,
		text: "https://sketchfab.com/3d-models/egg-04c322d857504a80983d4bf4f4b56ba9#download",
		text2: "https://sketchfab.com/viae",
	},
	{
		id: 20,
		text: "https://sketchfab.com/3d-models/custom-maxi-skirt-maxi-skirt-3d-model-8da4f9b6f62b4e8a9f01fb9442199808#download",
		text2: "https://sketchfab.com/uniformbuilder",
	},
];

const links = () => {
	const [data, setdata] = useState(DATA);
	const [isRender, setisRender] = useState(false);

	const renderItem = ({ item, index }) => {
		return (
			<SafeAreaView styles={styles.container}>
				<View style={styles.item}>
					<Hyperlink
						linkDefault={true}
						//linkStyle={{ color: "blue", fontSize: 16 }}
						linkText={(url) =>
							url ===
							"https://sketchfab.com/3d-models/eye-07c3674cfc26460d803f8f497f8c0f35"
								? "Mata"
								: url === "https://sketchfab.com/germydan"
								? "Tagiya sa materyales na mata"
								: url ===
								  "https://www.cgtrader.com/free-3d-models/food/miscellaneous/ice-cream-189af072-88d3-44c8-aebe-118bc5fc8c98"
								? "Apa"
								: url === "https://www.cgtrader.com/berjo"
								? "Tagiya sa materyales na apa"
								: url ===
								  "https://sketchfab.com/3d-models/eggplant-691d0e4cb6a1409ea72d960d0ab144ea"
								? "Talong"
								: url === "https://sketchfab.com/nodoxi"
								? "Tagiya sa materyales na talong"
								: url ===
								  "https://sketchfab.com/3d-models/canvas-sack-a0a690f8d2fe4899b6ae3324ca6dd744"
								? "Sako"
								: url === "https://sketchfab.com/AmericanKilometers"
								? "Tagiya sa materyales na sako"
								: url === "https://www.cgtrader.com/items/2656985/download-page"
								? "Lata"
								: url === "https://www.cgtrader.com/sdipietro"
								? "Tagiya sa materyales na lata"
								: url ===
								  "https://sketchfab.com/3d-models/elder-crystal-bow-polypaint-e3b58d6553f14f1eb353a311734cec1a"
								? "Pana"
								: url === "https://sketchfab.com/janchristian"
								? "Tagiya sa materyales na pana"
								: url ===
								  "https://sketchfab.com/3d-models/frog-ebc42901b4d44ef284da6df23c401312"
								? "Baki"
								: url === "https://sketchfab.com/Micow.Chiang"
								? "Tagiya sa materyales na baki"
								: url ===
								  "https://sketchfab.com/3d-models/lowpoly-milk-91492741c1fe4b5b80c89d8202664cd5"
								? "Gatas"
								: url === "https://sketchfab.com/beewee"
								? "Tagiya sa materyales na gatas"
								: url ===
								  "https://sketchfab.com/3d-models/a-single-plant-leaf-5d1d3453adb94e3e88c8658ae4736ac9"
								? "Dahon"
								: url === "https://sketchfab.com/mellydeeis"
								? "Tagiya sa materyales na dahon"
								: url ===
								  "https://sketchfab.com/3d-models/stair-block-7ab033454cb94238a952ad03cd61c95c"
								? "Hagdan"
								: url === "https://sketchfab.com/Julien_van_Beek"
								? "Tagiya sa materyales na hagdan"
								: url ===
								  "https://sketchfab.com/3d-models/fish-shaped-besamin-box-e1c73c6804604c19bb5de01a0d8cec62"
								? "Isda"
								: url === "https://sketchfab.com/WirtualneMuzeaMalopolski"
								? "Tagiya sa materyales na isda"
								: url ===
								  "https://sketchfab.com/3d-models/ashley-homestore-pillow-flower-e077e53e43b44004b1a9375fd919ec1f#download"
								? "Unlan"
								: url === "https://sketchfab.com/R.Miha.H"
								? "Tagiya sa materyales na unlan"
								: url ===
								  "https://sketchfab.com/3d-models/philips-radio-46bdaf3fb5cc47b2a7c3f273433dc0dd#download"
								? "Radyo"
								: url === "https://sketchfab.com/thesidekick"
								? "Tagiya sa materyales na radyo"
								: url ===
								  "https://sketchfab.com/3d-models/key-a4aca11a2259462f8735a60eead33962"
								? "Yabi"
								: url === "https://sketchfab.com/eucocker"
								? "Tagiya sa materyales na yabi"
								: url ===
								  "https://sketchfab.com/3d-models/ivory-comb-eed85f1f45954ea5bfba7655ceda2ae9"
								? "Sudlay"
								: url === "https://sketchfab.com/elsa2297.ice"
								? "Tagiya sa materyales na sudlay"
								: url ===
								  "https://sketchfab.com/3d-models/japanese-tea-cup-506f16847d0a4565bdf5d4fa4c358546"
								? "Basu"
								: url === "https://sketchfab.com/fengyuan20000303"
								? "Tagiya sa materyales na basu"
								: url ===
								  "https://sketchfab.com/3d-models/plastic-toy-bull-rawscan-100ae8c4371848f0804907e008d5eedf#download"
								? "Bula"
								: url === "https://sketchfab.com/spogna"
								? "Tagiya sa materyales na bula"
								: url ===
								  "https://sketchfab.com/3d-models/jar-c8e4632c86fa4245b89a1bcb64fc9562#download"
								? "Garapon"
								: url === "https://sketchfab.com/mounica.choco9"
								? "Tagiya sa materyales na garapon"
								: url ===
								  "https://sketchfab.com/3d-models/egg-04c322d857504a80983d4bf4f4b56ba9#download"
								? "Ublung"
								: url === "https://sketchfab.com/viae"
								? "Tagiya sa materyales na ublung"
								: url ===
								  "https://sketchfab.com/3d-models/custom-maxi-skirt-maxi-skirt-3d-model-8da4f9b6f62b4e8a9f01fb9442199808#download"
								? "Sayal"
								: url === "https://sketchfab.com/uniformbuilder"
								? "Tagiya sa materyales na sayal"
								: url
						}
					>
						<Text style={styles.text}>{item.text}</Text>
						<Text style={styles.text2}>{item.text2}</Text>
					</Hyperlink>
				</View>
			</SafeAreaView>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderItem}
				extraData={isRender}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	separatorLine: {
		height: 1,
		backgroundColor: "black",
	},
	itemlist: {
		height: 80,
		width: SCREEN_WIDTH,
		backgroundColor: "white",
		justifyContent: "center",
		padding: 16,
	},
	item: {
		borderBottomWidth: 1,
		borderBottomColor: "grey",
		alignItems: "flex-start",
	},
	text: {
		marginVertical: 10,
		fontSize: 20,
		fontWeight: "bold",
		marginLeft: 10,
	},
	text2: {
		marginVertical: 5,
		fontSize: 20,
		marginLeft: 10,
		color: "blue",
	},
	sectionDes: {
		marginTop: 8,
		fontSize: 20,
		fontWeight: "400",
	},
});

export default links;
