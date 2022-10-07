import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Text } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Colors from "../constans/Colors";
import { Ionicons } from "@expo/vector-icons";
import { NativeStack } from "./NativeStack";
import { FavNativeStack } from "./FavNativeStack";
const Tab = createBottomTabNavigator();
const androidTab = createMaterialBottomTabNavigator();
export const BottomTabNavigator = () => {
  const IosBottombar = (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: "open-sans",
        },

        tabBarActiveTintColor: Colors.accentColor,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="tab"
        component={NativeStack}
        options={{
          //   tabBarBadge: 3,
          title: "Meals",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-restaurant" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={FavNativeStack}
        options={{
          title: "Favorites",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-star" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
  const androidBottomBar = (
    <androidTab.Navigator
      activeColor={"white"}
      inactiveColor="gray"
      shifting={true}
      barStyle={{
        backgroundColor: Colors.primaryColor,
      }}
    >
      <androidTab.Screen
        name="tab"
        component={NativeStack}
        options={{
          //   tabBarBadge: 3,
          title: "Meals",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-restaurant" size={25} color={color} />
          ),
          tabBarColor: Colors.primaryColor,
          tabBarLabel: (
            <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
          ),
        }}
      />
      <androidTab.Screen
        name="favTab"
        component={FavNativeStack}
        options={{
          title: "Favorites",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-star" size={25} color={color} />
          ),
          tabBarColor: Colors.accentColor,
          tabBarLabel: (
            <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
          ),
        }}
      />
    </androidTab.Navigator>
  );
  //   if (Platform.OS === "android") return androidBottomBar;
  return androidBottomBar;
};
