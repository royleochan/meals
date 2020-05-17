import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealDetails from "../components/MealDetails";
import HeaderButton from "../components/HeaderButton";

const MealDetailScreen = (props) => {
  const itemData = props.navigation.getParam("itemDetails");
  return (
    <View style={styles.screen}>
      <MealDetails itemDetails={itemData} />
      <Button
        title="Go back to categories"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const selectedItem = navigationData.navigation.getParam("itemDetails");
  return {
    headerTitle: selectedItem.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        />
      </HeaderButtons>
    )
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
