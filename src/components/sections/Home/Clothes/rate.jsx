import { View, Text, Image } from 'react-native'
import React from 'react'

const Rate = ({quantityRated}) => {
  return (
    <View>
      {quantityRated === 3 && (
        <View className='flex flex-row pt-2'>
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://i.postimg.cc/5ybPhFHx/star-activated.png",
              }}
              className='w-4 h-4'
            />
          ))}
          <Image
            source={{
              uri: "https://i.postimg.cc/3rG46c7J/star-inactive.png",
            }}
            className='w-4 h-4'
          />
          <View className='pl-1'>
            <Text className='font-thin'>({quantityRated})</Text>
          </View>
        </View>
      )}
      {quantityRated >= 8 && (
        <View className='flex flex-row pt-2'>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://i.postimg.cc/5ybPhFHx/star-activated.png",
              }}
              className='w-4 h-4'
            />
          ))}
          <View className='pl-1'>
            <Text className='font-thin'>({quantityRated})</Text>
          </View>
        </View>
      )}
      {quantityRated === 0 && (
        <View className='flex flex-row pt-2'>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://i.postimg.cc/3rG46c7J/star-inactive.png",
              }}
              className='w-4 h-4'
            />
          ))}
          <View className='pl-1'>
            <Text className='font-thin'>({quantityRated})</Text>
          </View>
        </View>
      )}
    </View>
  );
}

export default Rate