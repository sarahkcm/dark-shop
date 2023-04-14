import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
const pathToAssetToSlides = "../../../../assets/image/slides/";
const pathToAssetToVectors = "../../../../assets/image/vectors/";
const Third = ({ navigation }) => {
  return (
    <View>
      <View className='flex flex-row justify-between py-16 px-4 '>
        <TouchableOpacity onPress={() => navigation.navigate("second")}>
          <Image
            source={require(pathToAssetToVectors + "arrow-left.png")}
            className='w-auto h-auto'
          />
        </TouchableOpacity>
        <Text className='font-bold'>Skip</Text>
      </View>
      <View className='flex flex-col justify-center items-center pt-12'>
        <Image
          source={require(pathToAssetToSlides + "car-img.png")}
          className='w-auto h-auto'
        />
        <View className='flex flex-row py-10 space-x-3'>
          <Image
            source={require(pathToAssetToVectors + "light-point.png")}
            className='w-auto h-auto'
          />
          <Image
            source={require(pathToAssetToVectors + "light-point.png")}
            className='w-auto h-auto'
          />
          <Image
            source={require(pathToAssetToVectors + "dark-point.png")}
            className='w-auto h-auto'
          />
        </View>
        <View className='flex flex-col justify-center items-center  py-2'>
          <Text className='font-bold text-2xl'>Lorem ipsum</Text>
          <Text className='text-center px-20 py-4 text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
        </View>
        <View className='py-10'>
          <TouchableOpacity
            onPress={() => navigation.navigate("sign-in")}
            className='w-72 h-12 rounded-md flex justify-center items-center bg-black'
          >
            <Text className='text-white text-center font-bold tracking-wider text-xl'>
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Third;
