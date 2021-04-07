import React from "react";
import { observer } from "mobx-react";
import { Content, List, View } from "native-base";
import movieStore from "../stores/MovieStore";
import MovieDetails from "../screens/MovieDetails";
function MovieList({ navigation, route }) {
  const movies = movieStore.movies.map((movie) => (
    <MovieDetails movie={movie} key={movie.id} />
  ));
  return (
    <View>
      <List>{movies}</List>
    </View>
  );
}

export default observer(MovieList);
