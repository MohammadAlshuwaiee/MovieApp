import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const HomeWrapper = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 100px;
`;

const Home = ({ navigation }) => {
  return (
    <HomeWrapper>
      <Text>Sign Up</Text>
      <Text>Sign In</Text>

      <Text onPress={() => navigation.navigate("Movie Detail")}>
        Go to Movie Details
      </Text>
    </HomeWrapper>
  );
};

export default Home;
