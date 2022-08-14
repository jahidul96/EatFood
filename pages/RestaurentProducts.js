import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React, {useState} from "react";
import {TimeAndRating, TopIconComp} from "../components/Reuseable";
import RatingStar from "react-native-vector-icons/AntDesign";
import HeartIcon from "react-native-vector-icons/AntDesign";
import RightIcon from "react-native-vector-icons/EvilIcons";
import {COLORS} from "../COLOR/Colors";
import {Tabs} from "./SearchFood";
import {foodTitle} from "../data/TabData";
import SearchItems from "../components/SearchItems";
import {BudgetBitesData} from "../data/BugetBites";

const RestaurentProducts = ({route, navigation}) => {
	const data = route.params;
	const [tagname, setTagName] = useState("Snacks");
	const [show, setShow] = useState(false);

	const check = (name) => {
		setTagName(name);
	};

	return (
		<SafeAreaView style={styles.root}>
			<Image source={{uri: data.img}} style={styles.imgStyle} />
			<View style={styles.iconCompWrapper}>
				<TopIconComp navigation={navigation} search={true} />
			</View>
			<View style={styles.resDetailsWrapper}>
				<ResDetailsComp data={data} show={show} setShow={setShow} />
				<View style={styles.tabWrapper}>
					<Tabs
						slideTitle={foodTitle}
						check={check}
						tagname={tagname}
					/>
				</View>
			</View>
			<ScrollView contentContainerStyle={styles.wrapper}>
				<View style={styles.itemWrapper}>
					<SearchItems searchData={BudgetBitesData} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const extraStyle = {
	width: "40%",
	paddingHorizontal: 0,
};

export default RestaurentProducts;

const ResDetailsComp = ({data, show, setShow}) => (
	<View style={styles.resDetailsContainer}>
		<View style={styles.flexStyle}>
			<View style={styles.flexStyle}>
				<Text style={styles.titleText}>
					{data.title} - {data.location}
				</Text>
				<TouchableOpacity style={styles.openBtn}>
					<Text style={styles.btnText}>Open</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity onPress={() => setShow(!show)}>
				{show ? (
					<HeartIcon name="heart" size={20} color={COLORS.RED} />
				) : (
					<HeartIcon name="hearto" size={20} color={COLORS.ORANGE} />
				)}
			</TouchableOpacity>
		</View>
		<View style={[styles.flexStyle, styles.moreInfo]}>
			<Text style={styles.infoText}>See more information</Text>
			<RightIcon name="chevron-right" size={15} />
		</View>
		<View style={[styles.flexStyle, styles.moreInfo]}>
			<View style={[styles.flexStyle, styles.moreInfo]}>
				<RatingStar name="star" color={COLORS.ORANGE} size={10} />
				<Text style={styles.ratingText}>{data.rating} (59)</Text>
			</View>
			<Text style={styles.ratingText}>Bengli-Biryani-Indian</Text>
		</View>
		<TimeAndRating
			data={data}
			extraStyle={extraStyle}
			extraTextStyle={styles.infoText}
			details={true}
		/>
	</View>
);

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	iconCompWrapper: {
		position: "absolute",
		width: "100%",
		top: 50,
		left: 0,
	},
	wrapper: {},
	imgStyle: {
		width: "100%",
		height: 200,
	},
	resDetailsWrapper: {
		paddingHorizontal: 20,
		backgroundColor: COLORS.WHITE,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		elevation: 10,
		borderBottomColor: COLORS.thinGray,
		borderBottomWidth: 1,
		marginTop: -10,
	},
	resDetailsContainer: {
		backgroundColor: COLORS.WHITE,
		borderRadius: 10,
		elevation: 1,
		marginTop: -50,
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	flexStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	openBtn: {
		marginLeft: 10,
		backgroundColor: COLORS.ORANGE,
		width: 50,
		height: 22,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		marginTop: 3,
	},
	moreInfo: {
		justifyContent: "flex-start",
	},
	titleText: {
		fontWeight: "900",
	},
	infoText: {
		fontSize: 11,
		fontWeight: "700",
		marginBottom: 3,
	},
	btnText: {
		fontSize: 12,
		color: COLORS.WHITE,
	},
	ratingText: {
		fontSize: 11,
		marginLeft: 5,
		fontWeight: "700",
	},

	tabWrapper: {
		marginTop: 10,
	},
	itemWrapper: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: COLORS.WHITE,
	},
});
