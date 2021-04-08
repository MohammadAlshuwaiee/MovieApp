import React, { useState } from "react";
import styled from "styled-components/native";
import authStore from "../../stores/AuthStore";
import bgimage from "../../assets/images/moviesposter.jpeg";
import { observer } from "mobx-react";

const SigninPage = ({ navigation }) => {
  if (authStore.user) navigation.replace("Home");

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
  };

  return (
    <>
      <BgImage source={bgimage}>
        <AuthContainer>
          <AuthTextInput
            placeholder="Username"
            placeholderTextColor="white"
            onChangeText={(username) => setUser({ ...user, username })}
          />
          <AuthTextInput
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
          <AuthButton onPress={handleSubmit}>
            <AuthButtonText>Sign in</AuthButtonText>
          </AuthButton>
          <AuthOther onPress={() => navigation.navigate("signup")}>
            Click here to register!
          </AuthOther>
        </AuthContainer>
      </BgImage>
    </>
  );
};

export default observer(SigninPage);

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const AuthTitle = styled.Text`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: red;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: white;
  border-bottom-color: red;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: red;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: white;
  margin-top: 15px;
`;

export const BgImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  /* width: 100%; */
`;
