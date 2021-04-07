import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { observer } from "mobx-react";
import {
  Posterimage,
  HomeWrapper,
  DetailsWrapper,
  Watchbutton,
  DetailsText,
} from "../styles";
import { Rating, AirbnbRating } from "react-native-ratings"; //5.3.0

const MoviePage = ({ navigation, route }) => {
  const { movie } = route.params;

  return (
    <HomeWrapper>
      <Posterimage
        onPress={() => navigation.navigate("Home")}
        source={{ uri: `${movie.image}` }}
      />
      <DetailsWrapper>
        <DetailsText>Genre: {movie.genre}</DetailsText>
        <DetailsText>Age: {movie.ageRestriction}</DetailsText>
        <DetailsText>
          Rating: {movie.rating} <AirbnbRating count={1} size={1} />
        </DetailsText>
      </DetailsWrapper>
      <TouchableOpacity>
        <Watchbutton>Movie: {movie.name}</Watchbutton>
      </TouchableOpacity>
      <TouchableOpacity>
        <Watchbutton
          onPress={() => navigation.navigate("Reviews", { movie: movie })}
        >
          Reviews
        </Watchbutton>
      </TouchableOpacity>
    </HomeWrapper>
  );
};

export default observer(MoviePage);
