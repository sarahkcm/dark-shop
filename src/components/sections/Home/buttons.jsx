import { View, Text, Image } from "react-native";
import React from "react";

const Buttons = () => {
  const pathToAssetToVectors = "../../../../assets/image/vectors/";
  return (
    <View className='px-6 '>
      <View className='bg-bgButtons flex flex-row justify-between '>
        <View className='flex flex-row space-x-3 items-center justify-center'>
          <Image
            source={require(pathToAssetToVectors + "filter-vec.png")}
            className='w-6 h-6'
          />
          <Text className='text-black text-md text-center'>Filters</Text>
        </View>
        <View className='flex flex-row space-x-3 items-center justify-center'>
          <Image
            source={require(pathToAssetToVectors + "date-vec.png")}
            className='w-8 h-7'
          />
          <Text className='text-black text-md text-center'>Date</Text>
        </View>
        <View className='flex flex-row space-x-3 items-center justify-center'>
          <Image
            source={require(pathToAssetToVectors + "price-vec.png")}
            className='w-6 h-6'
          />
          <Text className='text-black text-md text-center'>Price</Text>
        </View>
        <View className='flex flex-row space-x-3 items-center justify-center'>
          <Image
            source={require(pathToAssetToVectors + "View-vec.png")}
            className='w-6 h-6'
          />
        </View>
      </View>
    </View>
  );
};

export default Buttons;
