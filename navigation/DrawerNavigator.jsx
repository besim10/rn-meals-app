import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { FiltersNavigator } from "./FiltersNavigator";
import { View, Button } from "react-native";
const Drawer = createDrawerNavigator();
import Colors from "../constans/Colors";
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.accentColor,
        drawerInactiveTintColor: Colors.primaryColor,
        drawerLabelStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <Drawer.Screen
        name="BtNavigator"
        component={BottomTabNavigator}
        options={{ drawerLabel: "Meals" }}
      />
      <Drawer.Screen name="Filters" component={FiltersNavigator} />
    </Drawer.Navigator>
  );
};
