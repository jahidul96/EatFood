import {
	StyleSheet,
	Text,
	View,
	Modal,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import {COLORS} from "../COLOR/Colors";
import {Filters, FilterSlideData} from "../data/TabData";
import {Tabs} from "../pages/SearchFood";
import {ButtonComp} from "./Reuseable";

const clearBtnStyle = {
	backgroundColor: COLORS.DARKGRAY,
	width: "40%",
};
const applyBtnStyle = {
	backgroundColor: COLORS.ORANGE,
	width: "45%",
};

const PopupModel = ({modalVisible, setModalVisible}) => {
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
			<View style={styles.centeredView}>
				<View style={styles.topBorderStyleView}></View>
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
							closeModel={closeModel}
						/>
					))}

					<View style={styles.btnWrapper}>
						<ButtonComp text="clear" extraStyle={clearBtnStyle} />
						<ButtonComp text="Apply" extraStyle={applyBtnStyle} />
					</View>
				</ScrollView>
			</View>
		</Modal>
	);
};

export default PopupModel;

const FilterComp = ({data, select, extraStyle, closeModel}) => (
	<View style={styles.itemWrapper}>
		<Text>{data.name}</Text>
		<TouchableOpacity
			onPress={() => {
				select(data.id);
				closeModel();
			}}
			style={[styles.rightViewStyle, extraStyle]}
		></TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	centeredView: {
		position: "absolute",
		width: "100%",
		height: "80%",
		backgroundColor: COLORS.WHITE,
		bottom: 0,
		left: 0,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingVertical: 20,
		elevation: 2,
	},
	topBorderStyleView: {
		width: "15%",
		height: 3,
		borderRadius: 10,
		backgroundColor: COLORS.ORANGE,
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
		marginVertical: 20,
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
});
