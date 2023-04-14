import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Second from "../components/sections/Slides/second";

const SecondSlide = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Second navigation={navigation} />
    </View>
  );
};

export default SecondSlide;
