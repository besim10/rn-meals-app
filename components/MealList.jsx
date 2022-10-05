import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        title={itemData.item.title}
        affordability={itemData.item.affordability.toUpperCase()}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "100%" }}
        renderItem={renderMealItem}
        data={props.listData}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
