import {
	Text,
	TextInput,
	View,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import SearchIcon from "react-native-vector-icons/EvilIcons";
import {COLORS} from "../COLOR/Colors";
import ClockIcon from "react-native-vector-icons/AntDesign";
import DeliverIcon from "react-native-vector-icons/MaterialIcons";
import {cardTitleWrapper, iconStyle, ratingWrapper, textStyle} from "./Items";
import Arrowleft from "react-native-vector-icons/Fontisto";
import {topCompStyle} from "./TopSearchComp";
import HeartIcon from "react-native-vector-icons/AntDesign";

export const Input = () => <TextInput placeholder="search..." />;

export const SearchComp = ({navigation}) => (
	<TouchableOpacity
		style={styles.searchViewWrapper}
		activeOpacity={0.7}
		onPress={() => navigation.navigate("search")}
	>
		<SearchIcon name="search" size={25} color={COLORS.DARKGRAY} />
		<Text style={styles.searchText}>
			Search for dishes, restaurants or shops
		</Text>
	</TouchableOpacity>
);

export const TextComp = ({title, linkText}) => (
	<View style={styles.textCompWrapper}>
		<Text style={styles.titleText}>{title}</Text>
		<Text style={styles.linkText}>{linkText}</Text>
	</View>
);

export const TimeAndRating = ({data, extraStyle, extraTextStyle, details}) => (
	<View style={[cardTitleWrapper, details && extraStyle]}>
		<View style={ratingWrapper}>
			<ClockIcon
				name="clockcircle"
				size={10}
				color={COLORS.ORANGE}
				style={iconStyle}
			/>
			<Text style={[textStyle, details && extraTextStyle]}>
				{data.cookTime}
			</Text>
		</View>
		<View style={ratingWrapper}>
			<DeliverIcon
				name="delivery-dining"
				size={10}
				color={COLORS.ORANGE}
				style={iconStyle}
			/>
			<Text style={[textStyle, details && extraTextStyle]}>
				Tk {data.price}
			</Text>
		</View>
	</View>
);

export const TopIconComp = ({
	navigation,
	extrastyle,
	profile,
	search,
	favorites,
	fav,
	setFav,
}) => (
	<View
		style={[topCompStyle, styles.iconCompContainer, profile && extrastyle]}
	>
		<TouchableOpacity
			style={styles.backIconWrapper}
			onPress={() => navigation.goBack()}
		>
			<Arrowleft name="arrow-left-l" size={20} color={COLORS.DARKGRAY} />
		</TouchableOpacity>

		{search ? (
			<TouchableOpacity
				style={styles.backIconWrapper}
				onPress={() => navigation.navigate("search")}
			>
				<SearchIcon name="search" size={25} color={COLORS.ORANGE} />
			</TouchableOpacity>
		) : favorites ? (
			<TouchableOpacity
				style={styles.backIconWrapper}
				onPress={() => setFav(!fav)}
			>
				{fav ? (
					<HeartIcon name="heart" size={20} color={COLORS.RED} />
				) : (
					<HeartIcon name="hearto" size={20} color={COLORS.ORANGE} />
				)}
			</TouchableOpacity>
		) : null}
	</View>
);

export const ButtonComp = ({text, extraStyle, closeModel, model}) => (
	<TouchableOpacity
		activeOpacity={0.7}
		style={[styles.btnStyle, extraStyle]}
		onPress={model && closeModel}
	>
		<Text style={styles.btnText}>{text}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	// searchcomp styles
	searchViewWrapper: {
		flexDirection: "row",
		elevation: 3,
		height: 40,
		alignItems: "center",
		paddingHorizontal: 5,
		borderRadius: 10,
		backgroundColor: COLORS.WHITE,
	},
	searchText: {
		marginLeft: 3,
		color: COLORS.DARKGRAY,
	},

	// textcomp styles

	textCompWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 5,
	},
	titleText: {
		fontSize: 17,
		fontWeight: "700",
	},
	linkText: {
		color: COLORS.ORANGE,
	},

	// TopIconComp styles
	iconCompContainer: {
		borderBottomWidth: 0,
		height: "100%",
	},
	backIconWrapper: {
		elevation: 5,
		width: 35,
		height: 35,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.lightDark,
		borderRadius: 100 / 2,
	},

	// Buttoncomp style
	btnStyle: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		height: 35,
	},
	btnText: {
		color: COLORS.WHITE,
		fontWeight: "600",
	},
});
