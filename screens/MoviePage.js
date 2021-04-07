import React from "react";
import { TouchableOpacity, Text } from "react-native";

import {
  Posterimage,
  HomeWrapper,
  DetailsWrapper,
  Watchbutton,
  DetailsText,
} from "../styles";

const MoviePage = ({ navigation }) => {
  return (
    <HomeWrapper>
      <Posterimage
        onPress={() => navigation.navigate("Home")}
        source={{ uri: "https://bit.ly/2Q0iCUs" }}
      />
      <DetailsWrapper>
        <DetailsText onPress={() => alert("Buzz Lightyear")}>Genre</DetailsText>
        <DetailsText onPress={() => alert("Buzz Lightyear")}>Age</DetailsText>
        <DetailsText onPress={() => alert("Buzz Lightyear")}>
          Rating
        </DetailsText>
      </DetailsWrapper>
      <TouchableOpacity>
        <Watchbutton onPress={() => navigation.navigate("Watchnow")}>
          Movie
        </Watchbutton>
      </TouchableOpacity>
      <TouchableOpacity>
        <Watchbutton onPress={() => navigation.navigate("Reviews")}>
          Reviews
        </Watchbutton>
      </TouchableOpacity>
    </HomeWrapper>
  );
};

export default MoviePage;
