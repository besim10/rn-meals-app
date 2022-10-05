import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constans/Colors";
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";
// import FiltersScreen from "../screens/FiltersScreen";
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      //   navigationOptions: {
      //     headerTitle: "Meal Categories!!!",
      //   },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
// const FavNavigator = createStackNavigator(
//   {
//     Favorites: FavoritesScreen,
//     MealDetail: MealDetailScreen,
//   },
//   {
//     defaultNavigationOptions: defaultStackNavOptions,
//   }
// );
// const tabScreenConfig = {
//   Meals: {
//     screen: MealsNavigator,
//     navigationOptions: {
//       tabBarIcon: (tabInfo) => {
//         return (
//           <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
//         );
//       },
//       tabBarColor: Colors.primaryColor,
//     },
//   },
//   Favorites: {
//     screen: FavNavigator,
//     navigationOptions: {
//       // tabBarLabel: "!!",
//       tabBarIcon: (tabInfo) => {
//         return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
//       },
//       tabBarColor: Colors.accentColor,
//     },
//   },
// };
// const MealsFavTabNavigator =
//   Platform.OS === "android"
//     ? createMaterialBottomTabNavigator(tabScreenConfig, {
//         activeColor: "white",
//         shifting: true,
//         // barStyle: {
//         //   backgroundColor: Colors.primaryColor,
//         // },
//       })
//     : createBottomTabNavigator(tabScreenConfig, {
//         tabBarOptions: {
//           activeTintColor: Colors.accentColor,
//         },
//       });

// const FiltersNavigator = createStackNavigator({
//   Filters: { screen: FiltersScreen },
// });
// const MainNaviator = createDrawerNavigator({
//   MealsFavs: MealsFavTabNavigator,
//   Filters: FiltersNavigator,
// });
export default createAppContainer(MealsNavigator);