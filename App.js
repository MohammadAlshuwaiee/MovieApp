import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./component/Home";
import MoviePage from "./component/MoviePage";
import Reviews from "./component/Reviews";
import Watchnow from "./component/Watchnow";

const { Navigator, Screen } = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen name="Home" component={Home} />
          <Screen name="Movie Detail" component={MoviePage} />
          <Screen name="Reviews" component={Reviews} />
          <Screen name="Watch Screen" component={Watchnow} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
