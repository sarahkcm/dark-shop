import { View, Text } from "react-native";
import React from "react";
import First from "../components/sections/Slides/first";
import { useNavigation } from "@react-navigation/native";


const FirstSlide = () => {
    const navigation = useNavigation();

  return (
    <View className=' bg-gradient-to-r from-[#F9F8FD] to-white'>
      <First navigation={navigation} />
    </View>
  );
};

export default FirstSlide;
