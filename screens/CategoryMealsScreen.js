import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

import DefaultText from "../components/DefaultText";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  console.log("test");
  // @refresh reload
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found! Check your filters :)</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const title = navigationData.navigation.getParam("categoryTitle");
  return { headerTitle: title };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
