import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { List, View } from "native-base";
import movieStore from "../stores/MovieStore";
import MovieDetails from "../screens/MovieDetails";

function MovieList({ navigation }) {
  useEffect(() => {
    movieStore.fetchMovies();
  }, []);
  const moviesList = movieStore.movies.map((movie) => (
    <MovieDetails navigation={navigation} movie={movie} key={movie.id} />
  ));
  console.log(moviesList);
  return (
    <View>
      <List>{moviesList}</List>
    </View>
  );
}

export default observer(MovieList);
