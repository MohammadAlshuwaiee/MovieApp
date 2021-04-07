import React from "react";
import { ListItem } from "native-base";
import { Image, Text, View } from "react-native";
import { observer } from "mobx-react";
import movieStore from "../stores/MovieStore";

const MovieDetails = ({ movie, navigation }) => {
  return (
    <View>
      <ListItem
        onPress={() => navigation.navigate("MoviePage", { movie: movie })}
      >
        <Image
          style={{ width: 100, height: 100, backgroundColor: "black" }}
          source={{ uri: `${movie.image}` }}
        />
        <Text>{movie.name}</Text>
      </ListItem>
    </View>
  );
};

export default observer(MovieDetails);
