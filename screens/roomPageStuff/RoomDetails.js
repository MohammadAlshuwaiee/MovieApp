import React, { useEffect } from "react";
import { ListItem } from "native-base";
import { Image, Text, View } from "react-native";
import { observer } from "mobx-react";
import movieStore from "../../stores/MovieStore";

const RoomDetails = ({ navigation, route }) => {
  const { room } = route.params;

  useEffect(() => {
    movieStore.fetchMovies();
  }, []);
  const RoomMovie = movieStore.movie.find((movie) => movie.id === room.movieID);

  return (
    <View>
      <ListItem
        onPress={() => navigation.navigate("RoomUpdate", { room: room })}
      >
        <Image
          style={{ width: 100, height: 100, backgroundColor: "black" }}
          source={{ uri: `${RoomMovie.image}` }}
        />
        <Text>Room Name: {room.name}</Text>
        <Text>Description: {room.description}</Text>
        <Text>Number of Users: {room.numberOfUsers}</Text>
      </ListItem>
    </View>
  );
};

export default observer(RoomDetails);
