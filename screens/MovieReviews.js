import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Rating, AirbnbRating } from "react-native-ratings"; //5.3.0
import Tabs from "../navigation/tabs";

const MovieReviews = ({ navigation, route }) => {
  const { movie } = route.params;
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "red",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 26,
        }}
      >
        Movie Reviews {movie.name}
      </Text>

      <Image
        style={{
          width: 150,
          height: 250,
        }}
        source={{ uri: `${movie.image}` }}
      />

      <AirbnbRating
        count={10}
        size={25}
        reviews={[
          "Terrible",
          "Bad",
          "Meh",
          "OK",
          "Good",
          "Hmm...",
          "Very Good",
          "Wow",
          "Amazing",
          "Unbelievable",
        ]}
      />

      <TextInput style={styles.Title} placeholder="Enter your Review" />
      <TouchableOpacity>
        <Text style={styles.SubmitButton}>Submit</Text>
      </TouchableOpacity>

      <Tabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
  },

  Title: {
    backgroundColor: "#fff",

    width: 300,
    height: 40,
    fontSize: 20,
    marginBottom: 20,
    alignItems: "center",
  },

  SubmitButton: {
    justifyContent: "center",
    fontSize: 20,
    backgroundColor: "red",
    color: "white",
    borderRadius: 20,
    width: 120,
    alignSelf: "center",
    textAlign: "center",
  },
});

export default MovieReviews;
