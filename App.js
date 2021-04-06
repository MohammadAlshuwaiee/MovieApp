import React from "react";
import { MovieDetail } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/tabs";
import Reviews from "./component/Reviews";

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
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
