import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import NavBar from "../../../common/layout/nav-bar";
import Options from "./options";
import Buttons from "./buttons";
import Clothes from "./Clothes/clothes";
const pathToAssetToVectors = "../../../../assets/image/vectors/";

const HomeComponent = ({ navigation }) => {
  return (
    <View className='bg-white shadow-black shadow-md'>
      <View className='flex flex-row justify-between items-center pt-16 px-4'>
        <TouchableOpacity onPress={() => navigation.navigate("first")}>
          <Image
            source={require(pathToAssetToVectors + "arrow.png")}
            className='w-6 h-6'
          />
        </TouchableOpacity>
        <Text className='font-semibold text-xl'>Corp Tops</Text>
        <Image
          source={require(pathToAssetToVectors + "loop.png")}
          className='w-6 h-6'
        />
      </View>
      <View className=' py-4'>
        <Options />
      </View>
      <View className='pt-4 pb-3'>
        <Buttons />
      </View>
      <View className='bg-bgButtons'>
        <View className='py-3 px-6'>
          <Clothes />
        </View>
      </View>
    </View>
  );
};

export default HomeComponent;
