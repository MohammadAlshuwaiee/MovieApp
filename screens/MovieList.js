import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { List, View, Text } from "native-base";
import movieStore from "../stores/MovieStore";
import MovieDetails from "../screens/MovieDetails";

function MovieList({ navigation }) {
  //fetch movie from store

  useEffect(() => {
    movieStore.fetchMovies();
  }, []);

  {
    /*  Movie List from store  */
  }
  const moviesList = movieStore.movies.map((movie) => (
    <MovieDetails navigation={navigation} movie={movie} key={movie.id} />
  ));
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ marginTop: 60 }}>
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 20,
            paddingTop: 10,
            letterSpacing: 2,
            fontWeight: "bold",
            // backgroundColor: "red",
          }}
        >
          Movie List
        </Text>
      </View>
      <List>{moviesList}</List>
    </View>
  );
}

export default observer(MovieList);
