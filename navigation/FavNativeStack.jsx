import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constans/Colors";
const FavStack = createNativeStackNavigator();
export const FavNativeStack = () => {
  return (
    <FavStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: { fontFamily: "open-sans" },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
      }}
    >
      <FavStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: "Your Favorites" }}
      />
      <FavStack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.categoryTitle })}
      />
    </FavStack.Navigator>
  );
};
