import {
	StyleSheet,
	Text,
	View,
	Modal,
	ScrollView,
	TouchableOpacity,
	Image,
	Pressable,
} from "react-native";
import React, {useState} from "react";
import {COLORS} from "../COLOR/Colors";
import {Filters, FilterSlideData} from "../data/TabData";
import {Tabs} from "../pages/SearchFood";
import {ButtonComp} from "./Reuseable";
import EditBtn from "react-native-vector-icons/MaterialCommunityIcons";
import PlusBtn from "react-native-vector-icons/AntDesign";

const clearBtnStyle = {
	backgroundColor: COLORS.DARKGRAY,
	width: "40%",
};
const applyBtnStyle = {
	backgroundColor: COLORS.ORANGE,
	width: "45%",
};

const PopupModel = ({modalVisible, setModalVisible, menu, location}) => {
	const [tagname, setTagName] = useState("Filter By");
	const [selectedId, setSelectedId] = useState();
	const check = (name) => {
		setTagName(name);
	};
	const select = (id) => {
		setSelectedId(id);
	};

	const closeModel = () => {
		setTimeout(() => {
			setModalVisible(false);
		}, 1000);
	};
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible);
			}}
		>
			<View
				style={[styles.centeredView, location && styles.locationView]}
			>
				<View style={[styles.topBorderStyleView]}></View>

				{menu ? (
					<>
						<View style={styles.tabWrapper}>
							<View style={styles.paddingStyle}>
								<Tabs
									slideTitle={FilterSlideData}
									check={check}
									tagname={tagname}
								/>
							</View>
						</View>

						<ScrollView
							contentContainerStyle={[
								styles.paddingStyle,
								styles.filterCompWrapper,
							]}
						>
							{Filters.map((data) => (
								<FilterComp
									data={data}
									key={data.id}
									select={select}
									extraStyle={
										data.id == selectedId &&
										styles.selectedItemStyle
									}
								/>
							))}

							<View style={styles.btnWrapper}>
								<ButtonComp
									text="clear"
									extraStyle={clearBtnStyle}
									closeModel={closeModel}
									model={true}
								/>
								<ButtonComp
									text="Apply"
									extraStyle={applyBtnStyle}
									closeModel={closeModel}
									model={true}
								/>
							</View>
						</ScrollView>
					</>
				) : (
					<ScrollView contentContainerStyle={styles.paddingStyle}>
						<SelectAddress />
					</ScrollView>
				)}
			</View>
		</Modal>
	);
};

export default PopupModel;

const FilterComp = ({data, select, extraStyle}) => (
	<View style={styles.itemWrapper}>
		<Text>{data.name}</Text>
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={() => select(data.id)}
			style={[styles.rightViewStyle, extraStyle]}
		></TouchableOpacity>
	</View>
);

const SelectAddress = () => (
	<View>
		<Text style={styles.titleText}>Select Address</Text>
		<View style={styles.imgWrapper}>
			<Image
				source={{
					uri: "https://st.depositphotos.com/1064045/1994/i/600/depositphotos_19942491-stock-photo-navigation.jpg",
				}}
				style={styles.locationimgStyle}
			/>
		</View>
		<View style={styles.locationWrapper}>
			<View style={styles.selectViewStyle}>
				<View style={styles.orangeView}></View>
			</View>
			<View style={styles.locationTextWrapper}>
				<Text style={styles.clText}>Current location</Text>
				<Text style={styles.locationText}>Halishahar, Chittagong</Text>
			</View>
			<Pressable>
				<EditBtn name="pencil" size={20} />
			</Pressable>
		</View>

		<View style={styles.addLocationView}>
			<PlusBtn name="plus" size={20} color={COLORS.ORANGE} />
			<Text style={styles.selectLocationText}>Select New Location</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	centeredView: {
		position: "absolute",
		width: "100%",
		height: "70%",
		backgroundColor: COLORS.WHITE,
		bottom: 0,
		left: 0,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingVertical: 20,
		elevation: 20,
	},

	locationView: {
		height: "50%",
	},
	topBorderStyleView: {
		width: "15%",
		height: 4,
		borderRadius: 10,
		backgroundColor: COLORS.thinGray,
		alignSelf: "center",
		marginVertical: 10,
	},
	tabWrapper: {
		borderBottomColor: COLORS.thinGray,
		borderBottomWidth: 1,
	},
	paddingStyle: {
		paddingHorizontal: 20,
	},
	filterCompWrapper: {
		paddingVertical: 20,
	},
	itemWrapper: {
		borderWidth: 1,
		borderColor: COLORS.thinGray,
		marginBottom: 10,
		height: 40,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
		borderRadius: 5,
	},
	rightViewStyle: {
		width: 25,
		height: 25,
		borderRadius: 100 / 2,
		borderWidth: 1,
		borderColor: COLORS.thinGray,
	},

	selectedItemStyle: {
		backgroundColor: COLORS.ORANGE,
	},
	btnWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 10,
	},
	titleText: {
		fontWeight: "700",
		fontSize: 15,
	},
	imgWrapper: {
		height: 120,
		marginTop: 15,
	},
	locationimgStyle: {
		width: "100%",
		height: "100%",

		borderRadius: 10,
	},
	locationWrapper: {
		flexDirection: "row",
		marginVertical: 10,
		marginTop: 15,
	},
	selectViewStyle: {
		width: 20,
		height: 20,
		borderRadius: 100 / 2,
		borderColor: COLORS.ORANGE,
		borderWidth: 2,
		justifyContent: "center",
		alignItems: "center",
	},
	orangeView: {
		width: 10,
		height: 10,
		borderRadius: 20,
		backgroundColor: COLORS.ORANGE,
	},
	locationTextWrapper: {
		flex: 1,
		marginLeft: 10,
	},
	clText: {
		color: COLORS.ORANGE,
		fontWeight: "600",
	},
	locationText: {
		color: COLORS.DARKGRAY,
	},
	addLocationView: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 15,
	},

	selectLocationText: {
		marginLeft: 20,
		color: COLORS.ORANGE,
		fontWeight: "600",
	},
});
