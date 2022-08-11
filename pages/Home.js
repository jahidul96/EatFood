import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React, {useState} from "react";
import {COLORS} from "../COLOR/Colors";
import LocationComp from "../components/LocationComp";
import {SearchComp, TextComp} from "../components/Reuseable";
import MenuFoldIcon from "react-native-vector-icons/AntDesign";
import Items from "../components/Items";
import {PopularData} from "../data/PopularData";
import {StatusBar} from "expo-status-bar";
import {BudgetBitesData} from "../data/BugetBites";
import {NewItemData} from "../data/NewItemData";
import {SweetItemData} from "../data/SweetItemData";
import PopupModel from "../components/PopupModel";

const Home = ({navigation}) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<SafeAreaView style={[styles.root]}>
			<StatusBar style="dark" />
			{/* top component's */}
			<View style={styles.topCompStyles}>
				<LocationComp navigation={navigation} />
				<View style={styles.searchCompWrapper}>
					<View style={styles.searchViewStyle}>
						<SearchComp navigation={navigation} />
					</View>
					<TouchableOpacity
						onPress={() => setModalVisible(!modalVisible)}
					>
						<MenuFoldIcon
							name="menufold"
							size={27}
							color={COLORS.ORANGE}
						/>
					</TouchableOpacity>
				</View>
			</View>

			{/* scroll comp */}

			<ScrollView
				contentContainerStyle={styles.scrollstyles}
				showsVerticalScrollIndicator={false}
			>
				<TextComp title="Popular Collections" />
				<Items items={PopularData} popular={true} />
				<TextComp title="Budget Bites" linkText="See All" />
				<Items items={BudgetBitesData} details={true} />
				<TextComp title="What's New" linkText="See All" />
				<Items items={NewItemData} details={true} />
				<TextComp title="Sweet Cravings" linkText="See All" />
				<Items items={SweetItemData} details={true} />
				<TextComp title="Restaurants Near You" />
				<Items items={BudgetBitesData} details={true} near={true} />
			</ScrollView>

			{/* model */}
			<PopupModel
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: COLORS.lightDark,
	},
	topCompStyles: {
		width: "100%",
		height: "16%",
		paddingBottom: 10,
		backgroundColor: COLORS.WHITE,
		paddingHorizontal: 15,
		justifyContent: "flex-end",
	},
	searchCompWrapper: {
		flexDirection: "row",
		marginTop: 10,
		alignItems: "center",
		justifyContent: "space-between",
	},
	searchViewStyle: {
		width: "86%",
	},
	scrollstyles: {
		paddingHorizontal: 15,
		paddingVertical: 10,
	},

	modelShowBodyStyle: {
		backgroundColor: COLORS.DARKGRAY,
	},
});
