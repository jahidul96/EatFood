import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {COLORS} from "../COLOR/Colors";
import PlusBtn from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";

const SearchItems = ({searchData}) => {
	const navigation = useNavigation();
	return (
		<View>
			{searchData.map((data) => (
				<S_Items data={data} key={data.id} navigation={navigation} />
			))}
		</View>
	);
};

export default SearchItems;

export const S_Items = ({data, navigation}) => (
	<View activeOpacity={0.7} style={styles.itemWrapper}>
		<View>
			<Image source={{uri: data.img}} style={styles.imgStyle} />
		</View>
		<View style={styles.detailsWrapper}>
			<Text style={styles.title}>{data.title}</Text>
			<Text style={styles.bigtitle}>{data.bigTitle}</Text>
			<Text style={styles.title}>{data.desc}</Text>
			<View style={styles.priceandBtnWrapper}>
				<Text style={[styles.bigtitle, {fontSize: 11}]}>
					{data.price}
				</Text>
				<TouchableOpacity
					style={styles.btn}
					onPress={() =>
						navigation.navigate("sigleitemdetails", data)
					}
				>
					<PlusBtn name="plus" size={12} color={COLORS.ORANGE} />
				</TouchableOpacity>
			</View>
		</View>
	</View>
);

const styles = StyleSheet.create({
	itemWrapper: {
		flexDirection: "row",
		backgroundColor: COLORS.WHITE,
		elevation: 3,
		width: "100%",
		height: 130,
		marginVertical: 10,
		alignItems: "center",
		paddingHorizontal: 10,
		borderRadius: 10,
	},
	imgStyle: {
		width: 80,
		height: 100,
	},
	detailsWrapper: {
		marginLeft: 20,
		maxWidth: "65%",
	},
	title: {
		fontSize: 11,
		fontWeight: "600",
		color: COLORS.DARKGRAY,
	},
	bigtitle: {
		fontWeight: "700",
	},
	priceandBtnWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	btn: {
		borderWidth: 1,
		borderColor: COLORS.ORANGE,
		width: 20,
		height: 20,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
	plus: {
		fontWeight: "600",
		fontSize: 20,
		marginTop: -6,
	},
});
