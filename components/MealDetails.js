import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";

const MealDetails = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          source={{ uri: props.itemDetails.imageUrl }}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.itemDetails.title}</Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <Text>{props.itemDetails.steps}</Text>
      </View>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  imageContainer: {
    height: "60%",
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
});
