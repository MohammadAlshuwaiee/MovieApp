import React from "react";
import { ListItem } from "native-base";
import { Image, Text, View } from "react-native";
import { observer } from "mobx-react";
import movieStore from "../stores/MovieStore";

const MovieDetails = ({ movie }) => {
  return (
    <View>
      <ListItem>
        <Text>{movie.name}</Text>
      </ListItem>
    </View>
  );
};

export default observer(MovieDetails);
