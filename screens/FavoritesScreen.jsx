import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, StyleSheet } from "react-native";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
          {/* <Item
            title="Fav"
            iconName="ios-star-outline"
            onPress={() => {
              console.log("Mark as favorite!");
            }}
          /> */}
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FavoritesScreen;
