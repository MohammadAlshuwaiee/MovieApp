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
          fontSize: 26,
          marginBottom: 70,
        }}
      >
        Movie Reviews
      </Text>

      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 20,
        }}
        source={{ uri: `${movie.image}` }}
      />
      <Text style={{ color: "red", fontSize: 20, paddingTop: 40 }}>
        {movie.name}
      </Text>
      <View style={styles.container}>
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
      </View>
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
    textAlign: "center",
    borderRadius: 6,
  },

  SubmitButton: {
    justifyContent: "center",
    fontSize: 20,

    color: "red",
    borderRadius: 5,
    alignSelf: "center",
    textAlign: "center",
  },
});

export default MovieReviews;
