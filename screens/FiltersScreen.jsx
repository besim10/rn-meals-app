import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>FiltersScreen</Text>
    </View>
  );
};

export default FiltersScreen;
FiltersScreen.navigationOptions = {
  headerTitle: "Filter Meals",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
