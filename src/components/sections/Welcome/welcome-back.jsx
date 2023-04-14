import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../../../common/components/Welcome/buttons";
import Inputs from "../../../common/components/Welcome/inputs";
import SignIn from "../../../common/components/Welcome/sign-in";

const WelcomeBack = () => {
  const navigation = useNavigation();
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
      <View className='flex justify-center items-center py-32 bg-white w-screen h-'>
        <Text className='font-bold text-3xl text-gray-800'>Welcome Back!</Text>
        <Text className='py-4 text-lg text-gray-400'>
          Please enter your account here
        </Text>
        <View className='flex-col flex items-end space-y-4'>
          <Inputs
            passwordVisible={passwordVisible}
            handlePasswordChange={handlePasswordChange}
            togglePasswordVisibility={togglePasswordVisibility}
            setShowPasswordRequirements={setShowPasswordRequirements}
          />
          <View
            className={`pr-8 pt-2 ${
              showPasswordRequirements ? `hidden` : `block`
            }`}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("PasswordRecovery")}
            >
              <Text className='text-end text-sm text-gray-800 font-medium'>
                Forget password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {showPasswordRequirements ? (
          <SignIn navigation={navigation} />
        ) : (
          <Buttons navigation={navigation} />
        )}
      </View>
    </ScrollView>
  );
};

export default WelcomeBack;
