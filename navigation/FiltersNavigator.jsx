import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FiltersScreen from "../screens/FiltersScreen";
import { Platform } from "react-native";
import Colors from "../constans/Colors";
const FilterStack = createNativeStackNavigator();
export const FiltersNavigator = () => {
  return (
    <FilterStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: { fontFamily: "open-sans" },
      }}
    >
      <FilterStack.Screen
        name="Filters!!"
        component={FiltersScreen}
        options={{ title: "Filter Meals" }}
      />
    </FilterStack.Navigator>
  );
};
