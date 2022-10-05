import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      // <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Favorite"
        iconName="ios-star"
        onPress={() => {
          console.log("Mark as favorite!");
        }}
      />
      /* <Item
          title="Fav"
          iconName="ios-star-outline"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        /> */
      // </HeaderButtons>
    ),
  };
};
export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
