import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Buttons = ({ navigation }) => {
  return (
    <View className='px-6'>
      <View className='flex flex-col justify-center items-center w-12/12 pt-10'>
        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          className='bg-black rounded-md py-5 px-32 w-full '
        >
          <Text className={`text-white text-center font-bold text-sm `}>
            Login
          </Text>
        </TouchableOpacity>
        <Text className='py-8 text-[#9FA5C0]'>Or continue with</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          className='bg-[#FF5842] rounded-md py-4 px-32 w-full '
        >
          <View className='flex flex-row justify-center items-center space-x-1'>
            <Image
              source={{
                uri: "https://i.postimg.cc/vTcyC67c/Google.png",
              }}
              className='w-6 h-5'
            />
            <Text className={`text-white text-center font-bold text-sm`}>
              Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className='flex flex-row justify-center items-center py-8'>
        <Text>Don't have any account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("sign-up")}>
          <Text className='font-bold text-[#1FCC79] '>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buttons;
