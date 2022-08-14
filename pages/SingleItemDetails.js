import {
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import PlusBtn from "react-native-vector-icons/AntDesign";
import MinusBtn from "react-native-vector-icons/AntDesign";
import {ButtonComp, TopIconComp} from "../components/Reuseable";
import {COLORS} from "../COLOR/Colors";

const varientData = [
	{
		id: 1,
		varientTitle: "Half",
		price: "100",
	},
	{
		id: 2,
		varientTitle: "full",
		price: "180",
	},
	{
		id: 3,
		varientTitle: "Large",
		price: "300",
	},
];

const SingleItemDetails = ({route, navigation}) => {
	const [fav, setFav] = useState(false);
	const [count, setCount] = useState(0);
	const data = route.params;
	const [selectted, setSelected] = useState([]);

	const selectItem = (id) => {
		let newSelected = [];
		if (id) {
			let alreadyExtits = selectted.includes(id);
			newSelected = alreadyExtits
				? selectted.filter((sData) => sData != id)
				: [...selectted, id];
		}
		setSelected(newSelected);
	};

	const increaseBtn = () => {
		setCount((prevCount) => prevCount + 1);
	};
	const decreaseBtn = () => {
		if (count == 0) {
			return;
		}
		setCount((prevCount) => prevCount - 1);
	};
	return (
		<SafeAreaView style={styles.root}>
			<ScrollView>
				<Image source={{uri: data.img}} style={styles.imgStyle} />
				<View style={styles.iconCompWrapper}>
					<TopIconComp
						navigation={navigation}
						favorites={true}
						fav={fav}
						setFav={setFav}
					/>
				</View>
				<Description
					data={data}
					selectted={selectted}
					selectItem={selectItem}
				/>
			</ScrollView>
			<Footer
				count={count}
				increaseBtn={increaseBtn}
				decreaseBtn={decreaseBtn}
			/>
		</SafeAreaView>
	);
};

const Description = ({data, selectted, selectItem}) => (
	<>
		<View style={styles.descContainer}>
			<View style={styles.descTopWrapper}>
				<Text style={styles.bigTitle}>{data.bigTitle}</Text>
				<Text style={styles.price}>from TK {data.price}</Text>
			</View>
			<Text style={styles.desc}>{data.desc}</Text>
			<View style={styles.descTopWrapper}>
				<Text style={styles.price}>Varient</Text>
				<View style={styles.requiredWrapper}>
					<Text style={styles.requiredText}>1 Required</Text>
				</View>
			</View>
		</View>
		<View style={[styles.descContainer, {borderBottomWidth: 0}]}>
			{varientData.map((data) => (
				<Varient
					key={data.id}
					data={data}
					selectted={selectted}
					selectItem={selectItem}
				/>
			))}
		</View>
	</>
);

const Varient = ({data, selectted, selectItem}) => (
	<View style={[styles.descTopWrapper, styles.varientWrapper]}>
		<View style={styles.selectViewWrapper}>
			{selectted.includes(data.id) ? (
				<TouchableOpacity
					activeOpacity={0.7}
					style={[styles.selectView, styles.selectedBorderColor]}
					onPress={() => selectItem(data.id)}
				>
					<View style={styles.selectedViewStyle}></View>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.selectView}
					onPress={() => selectItem(data.id)}
				></TouchableOpacity>
			)}

			<Text style={styles.varientTitle}>{data.varientTitle}</Text>
		</View>
		<Text style={styles.price}>TK {data.price}</Text>
	</View>
);

const extraStyle = {
	backgroundColor: COLORS.DARKGRAY,
	width: "35%",
};

const Footer = ({count, increaseBtn, decreaseBtn}) => (
	<View style={styles.footerContainer}>
		<View style={styles.btnWrapper}>
			<TouchableOpacity style={styles.btn} onPress={decreaseBtn}>
				<MinusBtn name="minus" size={20} color={COLORS.WHITE} />
			</TouchableOpacity>
			<Text style={styles.countText}>{count}</Text>
			<TouchableOpacity
				style={[styles.btn, styles.plusBtn]}
				onPress={increaseBtn}
			>
				<PlusBtn name="plus" size={20} color={COLORS.WHITE} />
			</TouchableOpacity>
		</View>

		<ButtonComp text="Add To Cart" extraStyle={extraStyle} />
	</View>
);

export default SingleItemDetails;

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	imgStyle: {
		width: "100%",
		height: 200,
	},
	iconCompWrapper: {
		position: "absolute",
		width: "100%",
		top: 20,
		left: 0,
	},
	footerContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		height: 70,
		backgroundColor: COLORS.WHITE,
		borderTopColor: COLORS.thinGray,
		borderTopWidth: 1,
	},
	btnWrapper: {
		width: "35%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	btn: {
		backgroundColor: COLORS.DARKGRAY,
		justifyContent: "center",
		alignItems: "center",
		width: 30,
		height: 30,
		borderRadius: 5,
	},
	plusBtn: {
		backgroundColor: COLORS.ORANGE,
	},
	countText: {
		fontWeight: "600",
		fontSize: 18,
	},
	descContainer: {
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderBottomColor: COLORS.thinGray,
		borderBottomWidth: 1,
	},
	descTopWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	bigTitle: {
		fontWeight: "700",
		fontSize: 15,
	},
	price: {
		fontWeight: "500",
	},
	desc: {
		color: COLORS.DARKGRAY,
		width: "70%",
		fontSize: 12,
	},
	requiredWrapper: {
		backgroundColor: COLORS.ORANGE,
		width: "22%",
		height: 20,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},

	requiredText: {
		color: COLORS.WHITE,
		fontSize: 11,
	},
	selectText: {
		fontWeight: "500",
		fontSize: 13,
		marginBottom: 5,
	},
	varientWrapper: {
		paddingVertical: 10,
	},

	selectViewWrapper: {
		flexDirection: "row",
	},

	selectView: {
		width: 20,
		height: 20,
		borderRadius: 100 / 2,
		borderWidth: 1,
		borderColor: COLORS.DARKGRAY,
		justifyContent: "center",
		alignItems: "center",
	},
	selectedBorderColor: {
		borderColor: COLORS.ORANGE,
	},
	varientTitle: {
		marginLeft: 20,
		fontWeight: "600",
	},
	selectedViewStyle: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: COLORS.ORANGE,
	},
});
