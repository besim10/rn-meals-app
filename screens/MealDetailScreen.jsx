import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
