import React, { useState } from "react";
//import Movie deatail screen
import { MovieDetail } from "./screens";
//import stack navigator
import { createStackNavigator } from "@react-navigation/stack";
//import Navigator container
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import Tabs from "./navigation/tabs";
// import Reviews from "./component/Reviews";
// import MovieReviews from "./screens/MovieReviews";
//Movie Detail screen
// import MoviePage from "./screens/MoviePage";

import SigninPage from "./screens/signPageStuff/signinPage";
import SignupPage from "./screens/signPageStuff/signupPage";
import SplashScreen from "./screens/splashScreen/splashScreen";

//create a stackNavigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        // translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"splash"}
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="signin" component={SigninPage} />
          <Stack.Screen name="signup" component={SignupPage} />
          <Stack.Screen name="splash" component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
