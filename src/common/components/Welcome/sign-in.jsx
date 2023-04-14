import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SignIn = ({ navigation }) => {
  return (
    <View className='flex flex-col justify-center items-center w-[86%] pt-10'>
      <TouchableOpacity
        onPress={() => navigation.navigate("CheckEmail")}
        className='bg-black rounded-md py-5 px-36 w-full '
      >
        <Text className={`text-white text-center font-bold text-sm `}>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn