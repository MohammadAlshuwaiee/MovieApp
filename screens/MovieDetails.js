import React from "react";
import { ListItem } from "native-base";
import { Image, Text, View, StyleSheet } from "react-native";
import { observer } from "mobx-react";

const MovieDetails = ({ movie, navigation }) => {
  return (
    <View>
      <ListItem
        onPress={() => navigation.navigate("MoviePage", { movie: movie })}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            backgroundColor: "black",
            borderRadius: 30,
          }}
          source={{ uri: `${movie.image}` }}
        />
        <Text style={styles.Movietitle}>{movie.name}</Text>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  MovieContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  Movietitle: {
    color: "white",
    fontSize: 20,
    marginLeft: 40,
    textAlign: "center",
  },
});

export default observer(MovieDetails);
