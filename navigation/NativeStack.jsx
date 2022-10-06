import { Platform } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
// import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constans/Colors";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const MealsNavigator = createStackNavigator(
//   {
//     Categories: {
//       screen: CategoriesScreen,
//     },
//     CategoryMeals: {
//       screen: CategoryMealsScreen,
//     },
//     MealDetail: MealDetailScreen,
//   },
//   {
//     // initialRouteName: 'Categories',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
//       },
//       headerTintColor:
//         Platform.OS === "android" ? "white" : Colors.primaryColor,
//       headerTitle: "A Screen",
//     },
//   }
// );
// const Tab = createBottomTabNavigator();
// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={FavoritesScreen} />
//     </Tab.Navigator>
//   );
// }
// const MealsFavTabNavigator = createStackNavigator({
//   Meals: MealsNavigator,
//   Favorites: MyTabs(),
// });
// export default createAppContainer(MealsFavTabNavigator);
const Stack = createNativeStackNavigator();

export const NativeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
      }}
      initialRouteName="Categories"
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({ title: route.params.categoryTitle })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.mealTitle })}
      />
    </Stack.Navigator>
  );
};
