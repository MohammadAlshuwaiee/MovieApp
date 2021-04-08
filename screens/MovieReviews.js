import React from "react";
//react-native import
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
//import constants
import Constants from "expo-constants";
//rating grading import
import { AirbnbRating } from "react-native-ratings";
import Tabs from "../navigation/tabs";

// Movie reviews component
const MovieReviews = ({ navigation, route }) => {
  const { movie } = route.params;
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 26,
          marginBottom: 20,
        }}
      >
        Movie Reviews
      </Text>
      {/* image component */}
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 20,
        }}
        source={{ uri: `${movie.image}` }}
      />
      <Text style={{ color: "white", fontSize: 20, paddingTop: 40 }}>
        {movie.name}
      </Text>
      {/* Rating */}
      <View style={styles.container}>
        <AirbnbRating
          count={10}
          size={25}
          defaultRating={0}
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

// style
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
    height: 100,
    fontSize: 20,
    marginBottom: 20,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 6,
  },

  SubmitButton: {
    justifyContent: "center",
    fontSize: 20,

    color: "white",
    borderRadius: 5,
    alignSelf: "center",
    textAlign: "center",
  },
});

export default MovieReviews;
