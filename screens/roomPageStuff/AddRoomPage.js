import React, { useState } from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";
import roomStore from "../../stores/RoomStore";
import movieStore from "../../stores/MovieStore";
import styled from "styled-components/native";
import { observer } from "mobx-react";
import DropDownPicker from "react-native-dropdown-picker";
import bgimage from "../../assets/images/moviesposter.jpeg";
// Importing Image from react-native
import { Image } from "react-native";
import NumericInput from "react-native-numeric-input";
import { View } from "native-base";

const AddRoomPage = ({ navigation }) => {
  const [room, setRoom] = useState({
    name: "",
    description: "",
    movie: "",
    numberOfUsers: "",
  });

  const movieList = movieStore.movies.map((movie) => movie.name);
  const handleSubmit = async () => {
    await roomStore.createRoom(room);
  };

  const dropDownList = movieList.map((movie) => ({
    label: movie,
    value: movie,
  }));

  return (
    <>
      <TitleImgWrapper>
        <TitleText>Create New Room</TitleText>
        <Image style={{ width: 400, height: 200 }} source={bgimage} />
      </TitleImgWrapper>
      <CreateWrapper>
        <InputsWrapper>
          <DropDownPicker
            items={dropDownList}
            onChangeItem={(item) => setRoom({ ...room, movie: item.value })}
            containerStyle={{ height: 40, width: 300 }}
            style={{ backgroundColor: "#c1c3d7" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            placeholder="Choose a movie"
          />
          <CreateInput
            type="text"
            onChangeText={(name) => setRoom({ ...room, name })}
            name="name"
            placeholder="Movie name"
            placeholderTextColor="grey"
          />
          <CreateInput
            type="text"
            onChangeText={(description) => setRoom({ ...room, description })}
            name="description"
            placeholder="Movie description"
            placeholderTextColor="grey"
          />
          <View style={{ margin: 20 }}>
            <NumericInput
              value="1"
              onChange={(numberOfUsers) => setRoom({ ...room, numberOfUsers })}
              //   onLimitReached={(maxValue) => alert("Room is full!")}
              totalWidth={300}
              totalHeight={30}
              iconSize={25}
              step={1.0}
              valueType="real"
              minValue={parseFloat(1)}
              maxValue={parseFloat(10)}
              rounded
              textColor="white"
              iconStyle={{ color: "white" }}
              rightButtonBackgroundColor="green"
              leftButtonBackgroundColor="red"
            />
          </View>
        </InputsWrapper>
        <AuthButton onPress={handleSubmit}>
          <CreateText>Create</CreateText>
        </AuthButton>
      </CreateWrapper>
    </>
  );
};

export default observer(AddRoomPage);

const CreateWrapper = styled.View`
  flex: 2;
  /* height: 75%; */
  /* justify-content: center; */
  align-items: center;
  background-color: black;
  color: yellow;
`;

const InputsWrapper = styled.View`
  height: 60%;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  margin-top: 20px;
  color: black;
`;
const TitleImgWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* background-color: grey; */
  background-color: black;
  /* color: yellow; */
`;

const CreateText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const CreateInput = styled.TextInput`
  background-color: white;
  width: 300px;
  height: 35px;
  margin-top: 20px;
  /* justify-content: center; */
  padding-left: 15px;
  border: 2px solid white;
  color: black;
  /* margin-bottom: 20px; */
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: red;
  margin-top: 30px;
  width: 300;
  align-self: center;
`;

const TitleText = styled.Text`
  font-size: 25;
  margin-top: 120;
  margin-bottom: 20;
  font-weight: bold;
  color: red;
`;
