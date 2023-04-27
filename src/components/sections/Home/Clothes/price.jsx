import { View, Text } from 'react-native'
import React from 'react'

const Price = ({ oldPrice, actualPrice }) => {
  return (
    <View>
      {oldPrice === "" && (
        <View>
          <Text className='font-bold text-sm'>{actualPrice}</Text>
        </View>
      )}
      {oldPrice !== "" && (
        <View className=' flex flex-row space-x-1'>
          <Text className=' line-through font-light text-gray-600'>
            {oldPrice}
          </Text>
          <Text className='text-red-600 font-bold'>{actualPrice}</Text>
        </View>
      )}
    </View>
  );
};

export default Price