import React, { useState } from "react";
import styled from "styled-components/native";
import authStore from "../../stores/AuthStore";
import bgimage from "../../assets/images/moviesposter.jpeg";
import DropDownPicker from "react-native-dropdown-picker";
import { observer } from "mobx-react";

const SignupPage = ({ navigation }) => {
  if (authStore.user) navigation.replace("Home");
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    age: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
  };

  return (
    <BgImage source={bgimage}>
      <AuthContainer>
        <AuthTextInput
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <AuthTextInput
          placeholder="First Name"
          placeholderTextColor="white"
          onChangeText={(firstName) => setUser({ ...user, firstName })}
        />
        <AuthTextInput
          placeholder="Last Name"
          placeholderTextColor="white"
          onChangeText={(lastName) => setUser({ ...user, lastName })}
        />
        {/* <AuthTextInput
          placeholder="Role"
          placeholderTextColor="white"
          onChangeText={(role) => setUser({ ...user, role })}
        /> */}

        <AuthTextInput
          placeholder="Age"
          keyboardType="numeric"
          placeholderTextColor="white"
          onChangeText={(age) => setUser({ ...user, age })}
        />
        <AuthTextInput
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(email) => setUser({ ...user, email })}
        />
        <AuthTextInput
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <DropDownPicker
          placeholder="Choose a role"
          containerStyle={{ height: 40, width: 310 }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          items={[
            {
              label: "Viewer",
              value: "Viewer",
            },
            {
              label: "Room Creator",
              value: "Room Creator",
            },
          ]}
          onChangeItem={(item) => setUser({ ...user, role: item.value })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Sign up</AuthButtonText>
        </AuthButton>
        <AuthOther onPress={() => navigation.navigate("signin")}>
          Click here to login!
        </AuthOther>
      </AuthContainer>
    </BgImage>
  );
};

export default observer(SignupPage);

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

export const SettPicker = styled.Picker`
  width: 100px;
  height: 30px;
  background-color: pink;
  color: black;
  position: absolute;
`;
