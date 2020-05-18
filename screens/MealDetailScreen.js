import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import MealDetails from "../components/MealDetails";
import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = (props) => {
  const itemData = props.navigation.getParam("itemDetails");
  const mealId = itemData.id;
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id == mealId)
  );
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  return (
    <View style={styles.screen}>
      <MealDetails itemDetails={itemData} />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const selectedItem = navigationData.navigation.getParam("itemDetails");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: selectedItem.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
