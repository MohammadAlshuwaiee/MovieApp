import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Rating, AirbnbRating } from "react-native-ratings"; //5.3.0
import Tabs from "../navigation/tabs";
import movieStore from "../stores/MovieStore";

const movie = movieStore.movies.find((id) => movie.id);

const MovieReviews = ({ navigation }) => {
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
        Movie Reviews
      </Text>

      <View style={styles.ReviewWrapper}>
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

        <TouchableOpacity>
          <TextInput style={styles.Title} placeholder="Enter your Review" />
          <Text style={styles.SubmitButton}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Tabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
  },
  ReviewWrapper: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
    paddingTop: 250,
  },

  Title: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 350,
    height: 200,
    fontSize: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
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

  // tite: {
  //   fontSize: 24,
  //   textAlign: "center",
  //   color: "#34495e",
  // },
  // paragraph: {
  //   margin: 10,
  //   marginTop: 40,
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   color: "#34495e",
  // },
});

export default MovieReviews;
