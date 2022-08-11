import * as Font from "expo-font";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import React, {useEffect, useState, useCallback} from "react";
import Home from "./pages/Home";
import SearchFood from "./pages/SearchFood";
import RestaurentProducts from "./pages/RestaurentProducts";
import Profile from "./pages/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					"Helvetica-Bold": require("./assets/fonts/Helvetica-Bold.ttf"),
					"Helvetica-Regular": require("./assets/fonts/Helvetica-Regular.ttf"),
				});
				await new Promise((resolve) => setTimeout(resolve, 2000));
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<NavigationContainer onLayout={onLayoutRootView}>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name="entry" component={Home} />
				<Stack.Screen name="search" component={SearchFood} />
				<Stack.Screen
					name="restaurentproducts"
					component={RestaurentProducts}
				/>
				<Stack.Screen name="profile" component={Profile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
