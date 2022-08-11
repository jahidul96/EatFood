import {TextInput, View} from "react-native";
import Arrowleft from "react-native-vector-icons/Fontisto";
import Cross from "react-native-vector-icons/Entypo";
import Recording from "react-native-vector-icons/MaterialCommunityIcons";
import {useState} from "react";
import {COLORS} from "../COLOR/Colors";

export const topCompStyle = {
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	paddingHorizontal: 15,
	height: "9%",
	borderBottomWidth: 1,
	borderBottomColor: COLORS.thinGray,
};

const inputStyle = {
	flex: 1,
	paddingHorizontal: 20,
};

const TopSearchComp = ({navigation, title}) => {
	const [value, setValue] = useState(title);
	const crossBtn = () => {
		setValue("");
	};
	return (
		<>
			{value ? (
				<View style={topCompStyle}>
					<Arrowleft
						name="arrow-left-l"
						size={22}
						color={COLORS.DARKGRAY}
						onPress={() => navigation.goBack()}
					/>

					<TextInput
						style={inputStyle}
						value={value}
						onChangeText={(text) => setValue(text)}
						autoFocus={true}
					/>
					<Cross
						name="cross"
						size={22}
						color={COLORS.DARKGRAY}
						onPress={crossBtn}
					/>
				</View>
			) : (
				<View style={topCompStyle}>
					<Arrowleft
						name="arrow-left-l"
						size={22}
						color={COLORS.DARKGRAY}
						onPress={() => navigation.goBack()}
					/>

					<TextInput
						style={inputStyle}
						value={value}
						onChangeText={(text) => setValue(text)}
						placeholder="Search"
						autoFocus={true}
					/>
					<Recording
						name="text-to-speech"
						size={22}
						color={COLORS.DARKGRAY}
					/>
				</View>
			)}
		</>
	);
};

export default TopSearchComp;
