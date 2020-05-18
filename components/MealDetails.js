import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";

import DefaultText from "./DefaultText";

const MealDetails = (props) => {
  const layeredBox = (text) => {
    return (
      <View style={styles.box} key={Math.random()*100}>
        <DefaultText>{text}</DefaultText>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          source={{ uri: props.itemDetails.imageUrl }}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {props.itemDetails.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Ingredients</Text>
        </View>
        {props.itemDetails.ingredients.map(layeredBox)}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Steps</Text>
        </View>
        {props.itemDetails.steps.map(layeredBox)}
      </ScrollView>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flex: 1,
  },
  imageContainer: {
    height: "40%",
    width: "90%",
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  titleContainer: {
    backgroundColor: "grey",
  },
  box: {
    borderWidth: 1,
    borderRadius: 100,
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 12,
  },
  header: {
    fontFamily: "open-sans-bold",
  },
  headerContainer: {
    alignItems: "center",
  },
});
