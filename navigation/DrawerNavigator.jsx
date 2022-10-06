import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { FiltersNavigator } from "./FiltersNavigator";
const DrawerStack = createDrawerNavigator();
export const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="BtNavigator" component={BottomTabNavigator} />
      <DrawerStack.Screen name="Filters" component={FiltersNavigator} />
    </DrawerStack.Navigator>
  );
};
