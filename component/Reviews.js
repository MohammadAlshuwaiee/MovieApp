import React from "react";

import { Text, View, Title, Image } from "react-native";
function Reviews({ navigation }) {
  return (
    <View>
      <Grading score={4.0} num={72346} fontColor="#552da6" readOnly={true} />

      <Grading
        mode="stars"
        scale={2.4}
        score={this.state.stars.score}
        scoreBase={10}
        activeColor={customActiveColor}
        defaultColor={customDefaultColor}
        onGrading={this.changeStarScore}
      />
    </View>
  );
}

export default Reviews;
