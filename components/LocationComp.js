import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {COLORS} from "../COLOR/Colors";
import LocationIcon from "react-native-vector-icons/Entypo";
import DownIcon from "react-native-vector-icons/EvilIcons";
import Person from "react-native-vector-icons/Ionicons";

const LocationComp = ({navigation}) => {
	return (
		<View style={styles.mainWrapper}>
			<LocationIcon name="location" size={22} color={COLORS.ORANGE} />
			<View style={styles.locationWrapper}>
				<View>
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
			</View>
			<View>
				<Person
					name="person-circle-outline"
					size={32}
					color={COLORS.ORANGE}
					onPress={() => navigation.navigate("profile")}
				/>
			</View>
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
	locationWrapper: {
		flex: 1,
		paddingHorizontal: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
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
