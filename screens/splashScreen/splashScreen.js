import React from "react";
// import splachVid from "../../media/splash2.gif";
import splashImage from "../../assets/images/OFSmall.png";
import { ImageBackground } from "react-native";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("signin");
  }, 3000);

  return (
    <ImageBackground style={{ flex: 1 }} source={splashImage}></ImageBackground>
  );
};

export default SplashScreen;
