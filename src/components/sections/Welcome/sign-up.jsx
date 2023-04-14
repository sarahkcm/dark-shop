import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../../../common/components/Welcome/buttons";
import PasswordRequirement from "../../../common/components/Welcome/Sign-Up/password-requirement";
import SignIn from "../../../common/components/Welcome/sign-in";
import Inputs from "../../../common/components/Welcome/Sign-Up/inputs";
import SignUpBtn from "../../../common/components/Welcome/Sign-Up/sign-up-btn";

const SignUpComponent = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] =
    React.useState(false);
  const [hasMinChars, setHasMinChars] = React.useState(false);
  const [hasNumber, setHasNumber] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setTimeout(() => {
      setPasswordVisible(false);
    }, 5000);
  };

  const handlePasswordChange = (password) => {
    setHasMinChars(password.length >= 6);
    setHasNumber(/[0-9]/.test(password));
  };

  return (
    <ScrollView>
      <View className='flex justify-center items-center py-28 bg-white w-screen h-'>
        <Text className='font-bold text-3xl text-gray-800'>Welcome Back!</Text>
        <Text className='py-4 text-lg text-gray-400'>
          Please enter your account here
        </Text>
        <View className='flex-col flex justify-center items-c space-y-4'>
          <Inputs
            passwordVisible={passwordVisible}
            handlePasswordChange={handlePasswordChange}
            togglePasswordVisibility={togglePasswordVisibility}
            setShowPasswordRequirements={setShowPasswordRequirements}
          />
          <PasswordRequirement
            hasMinChars={hasMinChars}
            hasNumber={hasNumber}
          />
        </View>
        <SignUpBtn />
      </View>
    </ScrollView>
  );
};

export default SignUpComponent;
