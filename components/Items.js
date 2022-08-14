import {
	StyleSheet,
	Text,
	ScrollView,
	TouchableOpacity,
	Image,
	View,
} from "react-native";
import React, {useState} from "react";
import {COLORS} from "../COLOR/Colors";
import RatingStar from "react-native-vector-icons/AntDesign";
import HeartIcon from "react-native-vector-icons/AntDesign";
import {TimeAndRating} from "./Reuseable";
import {useNavigation} from "@react-navigation/native";

export const cardTitleWrapper = {
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	paddingHorizontal: 8,
	paddingVertical: 5,
};
export const ratingWrapper = {
	flexDirection: "row",
	alignItems: "center",
};
export const iconStyle = {
	marginRight: 4,
};
export const textStyle = {
	fontSize: 10,
	fontWeight: "600",
};

const Items = ({items, details, near}) => {
	const navigation = useNavigation();
	const [fav, setFav] = useState([]);

	const addToFavorites = (data) => {
		let newFav = [];
		if (data) {
			let alreadyExtits = fav.includes(data.id);
			newFav = alreadyExtits
				? fav.filter((f) => f != data.id)
				: [...fav, data.id];
		}
		setFav(newFav);
	};

	return (
		<ScrollView
			horizontal={near ? false : true}
			showsHorizontalScrollIndicator={false}
		>
			{details
				? items.map((data, i) => (
						<View
							activeOpacity={0.7}
							key={data.id}
							style={[
								styles.cardItem,
								i == 0 ? {marginLeft: 3} : "",
								near && styles.resturentNearYou,
							]}
						>
							<Image
								source={{uri: data.img}}
								style={[
									styles.cardItemimgStyle,
									near && styles.restImgStyle,
								]}
							/>

							{/* position datas */}

							{fav.includes(data.id) ? (
								<TouchableOpacity
									style={styles.FavIconWrapper}
									onPress={() => addToFavorites(data)}
									activeOpacity={0.7}
								>
									<HeartIcon
										name="heart"
										size={18}
										color={COLORS.RED}
									/>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={styles.FavIconWrapper}
									onPress={() => addToFavorites(data)}
									activeOpacity={0.7}
								>
									<HeartIcon
										name="hearto"
										size={18}
										color={COLORS.RED}
									/>
								</TouchableOpacity>
							)}

							{near && (
								<View
									style={[
										styles.FavIconWrapper,
										styles.ratingPositionViewStyle,
									]}
								>
									<TimeAndRating data={data} />
								</View>
							)}

							{/* desc or bootom data */}
							<TouchableOpacity
								onPress={() => {
									navigation.navigate(
										"restaurentproducts",
										data
									);
								}}
							>
								<View
									style={[
										cardTitleWrapper,
										near && styles.extraDescStyle,
									]}
								>
									{near ? (
										<Text
											style={[
												styles.titleText,
												styles.resTitleStyle,
											]}
										>
											{data.restaurentName} -{" "}
											{data.location}
										</Text>
									) : (
										<Text style={styles.titleText}>
											{data.title.length > 13
												? data.title.slice(0, 12) +
												  "..."
												: data.title}
										</Text>
									)}

									<View style={ratingWrapper}>
										<RatingStar
											name="star"
											size={10}
											color={COLORS.ORANGE}
											style={iconStyle}
										/>
										<Text style={textStyle}>
											{data.rating} {near && "(56)"}
										</Text>
									</View>
								</View>
								{near ? (
									<View style={styles.extraDescStyle}>
										<Text style={styles.tagsStyle}>
											Bengli - Biryani - Indian
										</Text>
									</View>
								) : (
									<TimeAndRating data={data} />
								)}
							</TouchableOpacity>
						</View>
				  ))
				: items.map((data) => (
						<TouchableOpacity
							key={data.id}
							style={styles.itemWrapper}
							onPress={() =>
								navigation.navigate("search", data.title)
							}
						>
							<Image
								source={{uri: data.img}}
								style={styles.imgStyle}
							/>
							<Text style={styles.titleText}>{data.title}</Text>
						</TouchableOpacity>
				  ))}
		</ScrollView>
	);
};

export default Items;

const styles = StyleSheet.create({
	cardItem: {
		width: 130,
		height: 160,
		backgroundColor: COLORS.WHITE,
		marginRight: 15,
		borderRadius: 7,
		marginVertical: 10,
		elevation: 2,
	},
	cardItemimgStyle: {
		width: "100%",
		height: "65%",
		borderTopLeftRadius: 7,
		borderTopRightRadius: 7,
	},
	restImgStyle: {
		height: "72%",
	},
	itemWrapper: {
		marginRight: 10,
		paddingVertical: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	imgStyle: {
		width: 60,
		height: 60,
		borderRadius: 100 / 2,
		marginBottom: 5,
	},
	titleText: {
		fontSize: 11,
		fontWeight: "700",
		marginBottom: -3,
	},

	FavIconWrapper: {
		position: "absolute",
		right: 10,
		top: 10,
		backgroundColor: COLORS.WHITE,
		width: 30,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		elevation: 5,
		borderRadius: 100 / 2,
	},
	resturentNearYou: {
		width: "98%",
		marginHorizontal: 3,
		height: 200,
		elevation: 5,
		backgroundColor: COLORS.WHITE,
	},
	extraDescStyle: {
		paddingHorizontal: 10,
		marginBottom: 3,
	},
	ratingPositionViewStyle: {
		right: 10,
		top: "48%",
		width: "40%",
		alignItems: "stretch",
		paddingHorizontal: 3,
		borderRadius: 5,
		elevation: 8,
	},
	tagsStyle: {
		fontSize: 10,
		fontWeight: "600",
	},
	resTitleStyle: {
		fontSize: 14,
	},
});
