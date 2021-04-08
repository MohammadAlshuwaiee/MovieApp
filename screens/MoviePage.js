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

const MoviePage = ({ navigation, route }) => {
  const { movie } = route.params;

  return (
    <HomeWrapper>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 25,
          paddingBottom: -10,

          alignItems: "center",
          marginBottom: 50,
        }}
      >
        Movie Details
      </Text>
      {/*  Single Movie image  */}
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
          {/* Movie Details  */}
        </DetailsText>
      </DetailsWrapper>
      <TouchableOpacity>
        <MovieText>Movie Name : {movie.name}</MovieText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Reviews", { movie: movie })}
      >
        <Watchbutton>Reviews</Watchbutton>
      </TouchableOpacity>
    </HomeWrapper>
  );
};

export default observer(MoviePage);
