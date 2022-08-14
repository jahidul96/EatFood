import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {COLORS} from "../COLOR/Colors";
import LocationIcon from "react-native-vector-icons/Entypo";
import DownIcon from "react-native-vector-icons/EvilIcons";
import Person from "react-native-vector-icons/Ionicons";

const LocationComp = ({navigation, setLocationModel}) => {
	return (
		<View style={styles.mainWrapper}>
			<TouchableOpacity
				style={styles.locationContentWrapper}
				onPress={() => setLocationModel(true)}
			>
				<LocationIcon name="location" size={22} color={COLORS.ORANGE} />
				<View style={styles.locationtextWrapper}>
					<Text style={styles.deliverText}>Deliver To</Text>
					<Text style={styles.locationText}>
						Halishahar, chittagong
					</Text>
				</View>

				<DownIcon
					style={styles.downIconStyle}
					name="chevron-down"
					size={25}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => navigation.navigate("profile")}
			>
				<Person
					name="person-circle-outline"
					size={32}
					color={COLORS.ORANGE}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default LocationComp;

const styles = StyleSheet.create({
	mainWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	locationContentWrapper: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	locationtextWrapper: {
		flex: 1,
		marginLeft: 15,
	},
	deliverText: {
		color: COLORS.DARKGRAY,
		fontSize: 12,
	},
	locationText: {
		fontSize: 15,
	},
	downIconStyle: {
		marginRight: 30,
	},
});
