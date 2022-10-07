import "react-native-gesture-handler";

import { combineReducers, legacy_createStore } from "redux";
import mealsReducer from "./store/reducers/meals";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";
import Entypo from "@expo/vector-icons/Entypo";

import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { DrawerNavigator } from "./navigation/DrawerNavigator";
enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = legacy_createStore(rootReducer);
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
          "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);
  if (!fontLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <NavigationContainer>
          {/* <NativeStack /> */}
          {/* <BottomTabNavigator /> */}
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
