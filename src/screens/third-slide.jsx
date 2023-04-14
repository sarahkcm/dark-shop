import { View, Text } from "react-native";
import React from "react";
import Third from "../components/sections/Slides/third";
import { useNavigation } from "@react-navigation/native";

const ThirdSlide = () => {
    const navigation = useNavigation();

  return (
    <View>
      <Third navigation={navigation} />
    </View>
  );
};

export default ThirdSlide;
