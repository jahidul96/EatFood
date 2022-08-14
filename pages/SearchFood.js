import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React, {useState, useRef, useEffect} from "react";
import {COLORS} from "../COLOR/Colors";
import Items from "../components/Items";
import {QueryRestaurents} from "../data/SingleData";
import SearchItems from "../components/SearchItems";
import {queryText, slideTitle} from "../data/TabData";
import TopSearchComp from "../components/TopSearchComp";
import {StatusBar} from "expo-status-bar";
import {BudgetBitesData} from "../data/BugetBites";

const SearchFood = ({navigation, route}) => {
	const [tagname, setTagName] = useState("ALL");
	const title = route.params;

	const check = (name) => {
		setTagName(name);
	};

	return (
		<SafeAreaView style={styles.root}>
			<TopSearchComp navigation={navigation} title={title} />
			<View style={styles.tabWrapper}>
				<Tabs slideTitle={slideTitle} check={check} tagname={tagname} />
			</View>
			<ScrollView contentContainerStyle={styles.contentWrapper}>
				<View style={styles.queryTabContainer}>
					{queryText.map((data) => (
						<PriceQueryTab data={data} key={data.id} />
					))}
				</View>
				<Items items={QueryRestaurents} details={true} near={true} />
				<View>
					<SearchItems searchData={BudgetBitesData} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SearchFood;

export const Tabs = ({slideTitle, tagname, check}) => (
	<ScrollView horizontal showsHorizontalScrollIndicator={false}>
		{slideTitle.map((title) => (
			<TouchableOpacity
				key={title.id}
				style={
					tagname == title.name
						? [styles.tabItem, styles.extraTabStyle]
						: styles.tabItem
				}
				onPress={() => check(title.name)}
			>
				<Text
					style={
						tagname == title.name
							? [styles.tagTitle, styles.tagTitleColor]
							: styles.tagTitle
					}
				>
					{title.name}
				</Text>
			</TouchableOpacity>
		))}
	</ScrollView>
);

export const PriceQueryTab = ({data}) => (
	<TouchableOpacity style={styles.queryTab}>
		<Text style={styles.queryText}>{data.name}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: COLORS.WHITE,
	},
	tabWrapper: {
		paddingHorizontal: 15,
		paddingTop: 15,
		borderBottomColor: COLORS.thinGray,
		borderBottomWidth: 1,
	},
	tabItem: {
		marginRight: 30,
		height: 30,
	},
	extraTabStyle: {
		borderBottomWidth: 3,
		borderBottomColor: COLORS.ORANGE,
	},
	contentWrapper: {
		backgroundColor: COLORS.lightDark,
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	queryTabContainer: {
		flexDirection: "row",
		marginBottom: 8,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 5,
	},
	queryTab: {
		backgroundColor: COLORS.WHITE,
		marginRight: 10,
		width: "20%",
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		paddingHorizontal: 5,
		elevation: 2,
	},
	queryText: {
		color: COLORS.ORANGE,
		fontWeight: "700",
		fontSize: 12,
	},
	tagTitle: {
		fontWeight: "700",
		fontSize: 13,
	},
	tagTitleColor: {
		color: COLORS.ORANGE,
	},
});
