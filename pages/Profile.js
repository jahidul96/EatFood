import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {COLORS} from "../COLOR/Colors";
import CameraIcon from "react-native-vector-icons/Feather";
import LocationIcon from "react-native-vector-icons/Entypo";
import ShoppingBag from "react-native-vector-icons/Feather";
import HeartIcon from "react-native-vector-icons/Feather";
import Percent from "react-native-vector-icons/Feather";
import Credit from "react-native-vector-icons/Entypo";
import {TopIconComp} from "../components/Reuseable";

const Profile = ({navigation}) => {
	const email = "Jahidulislamakashroy96@gmail.com";
	return (
		<SafeAreaView style={styles.root}>
			<ScrollView contentContainerStyle={styles.mainWrapper}>
				<View style={styles.backBtnCompWrapper}>
					<TopIconComp
						extrastyle={styles.backBtnCompWrapperExtraStyle}
						navigation={navigation}
					/>
				</View>
				{/* profile section */}
				<View style={styles.profilemainWrapper}>
					<View>
						<Text style={styles.nameText}>Jahidul islam</Text>
						<Text>
							{email.length > 25
								? email.slice(0, 24) + "..."
								: email}
						</Text>
						<Text style={styles.phnText}>+880 1881383269</Text>
						<TouchableOpacity>
							<Text style={styles.editText}>Edit Profile</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.profieImgWrapper}>
						<CameraIcon name="camera-off" size={40} />
					</View>
				</View>
				{/* app activity */}

				<View style={styles.activityWrapper}>
					<ActivityComp
						Icon={LocationIcon}
						name="location"
						text="My Address"
					/>
					<ActivityComp
						Icon={ShoppingBag}
						name="shopping-bag"
						text="Shopping"
					/>
					<ActivityComp
						Icon={HeartIcon}
						name="heart"
						text="Favourites"
					/>
					<ActivityComp Icon={Percent} name="percent" text="Offers" />
					<ActivityComp
						Icon={Credit}
						name="creative-cloud"
						text="Transiction's"
					/>
				</View>
				{/* terms & conditions */}

				<View style={styles.termsWrapper}>
					<TouchableOpacity>
						<Text style={styles.termsText}>Fags</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.termsText}>T&c</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.termsText}>Privacy Policy</Text>
					</TouchableOpacity>
				</View>
				{/* logout */}
				<TouchableOpacity style={styles.logoutBtn}>
					<Text style={styles.termsText}>LogOut</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;

const ActivityComp = ({name, text, Icon}) => (
	<TouchableOpacity style={styles.activityCompStyle}>
		<Icon name={name} size={18} />
		<Text style={styles.activityText}>{text}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	mainWrapper: {
		paddingHorizontal: 15,
	},
	backBtnCompWrapper: {
		height: 60,
		marginBottom: 20,
	},
	backBtnCompWrapperExtraStyle: {
		paddingHorizontal: 0,
	},
	profilemainWrapper: {
		minHeight: 100,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 30,
	},
	nameText: {
		fontWeight: "700",
		fontSize: 17,
		marginBottom: 3,
	},
	phnText: {
		marginVertical: 4,
	},
	editText: {
		color: COLORS.ORANGE,
		fontWeight: "500",
	},

	profieImgWrapper: {
		width: 80,
		height: 80,
		borderColor: COLORS.thinGray,
		borderWidth: 1,
		borderRadius: 100 / 2,
		justifyContent: "center",
		alignItems: "center",
	},
	activityWrapper: {
		borderBottomWidth: 1,
		borderBottomColor: COLORS.thinGray,
		borderTopWidth: 1,
		borderTopColor: COLORS.thinGray,
		paddingVertical: 20,
	},
	activityCompStyle: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 13,
	},
	activityText: {
		marginLeft: 15,
		fontWeight: "500",
	},
	termsWrapper: {
		paddingVertical: 20,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.thinGray,
	},
	termsText: {
		marginBottom: 5,
		fontWeight: "500",
	},
	logoutBtn: {
		paddingVertical: 20,
	},
});
