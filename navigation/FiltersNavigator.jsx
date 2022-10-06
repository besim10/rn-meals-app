import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FiltersScreen } from "../screens/FiltersScreen";
const FilterStack = createNativeStackNavigator();

export const FiltersNavigator = () => {
  return (
    <FilterStack.Navigator
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    //     },
    //     headerTintColor:
    //       Platform.OS === "android" ? "white" : Colors.primaryColor,
    //   }}
    >
      <FilterStack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{ title: "Filter Meals" }}
      />
    </FilterStack.Navigator>
  );
};
