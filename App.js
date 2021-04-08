import React, { useState } from "react";
//import Movie deatail screen
import { MovieDetail } from "./screens";
//import stack navigator
import { createStackNavigator } from "@react-navigation/stack";
//import Navigator container
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/tabs";
// import Reviews from "./component/Reviews";
import MovieReviews from "./screens/MovieReviews";
//Movie Detail screen
import MoviePage from "./screens/MoviePage";

//create a stackNavigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
