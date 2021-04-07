import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { observer } from "mobx-react";
import {
  Posterimage,
  HomeWrapper,
  DetailsWrapper,
  Watchbutton,
  DetailsText,
  MovieText,
} from "../styles";
import { Rating, AirbnbRating } from "react-native-ratings"; //5.3.0
import { Button } from "native-base";

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
          Rating: {movie.rating}{" "}
          <Image
            style={{ height: 20, width: 20 }}
            source={{
              uri: "https://vectorified.com/images/gold-star-icon-5.png",
            }}
          />
        </DetailsText>
      </DetailsWrapper>
      <TouchableOpacity>
        <MovieText>Movie Name : {movie.name}</MovieText>
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
