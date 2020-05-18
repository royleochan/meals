import React from "react";
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  // @refresh reload
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const title = navigationData.navigation.getParam("categoryTitle");
  return { headerTitle: title };
};

export default CategoryMealsScreen;
