import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import { ClothesData } from "../../../../common/constants/clothes";
import Rate from "./rate";
import Price from "./price";

const Clothes = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View className='flex flex-row flex-wrap justify-between'>
        {ClothesData.map(
          (
            {
              marque,
              title,
              actualPrice,
              oldPrice,
              imageLittle,
              quantityRated,
            },
            i
          ) => {
            return (
              <View key={i} className=' space-x-4 py-2 pb-1'>
                <View className=''>
                  <View>
                    <Image
                      source={{ uri: imageLittle }}
                      className={` ${
                        Platform.OS === "ios" ? ` w-44` : ` w-40`
                      }  h-48 rounded-lg`}
                    />
                    <Image
                      source={{
                        uri: "https://i.postimg.cc/ZRDfRPLj/heart-border.png",
                      }}
                      className={` ${
                        Platform.OS === "ios" ? ` ` : ` `
                      } w-14 h-14  absolute -bottom-[14%] -right-[4%]`}
                    />
                  </View>
                  <Rate quantityRated={quantityRated} />
                  <View className='pt-1'>
                    <Text className=' font-light'>{marque}</Text>
                    <Text className=' font-semibold text-lg'>{title}</Text>
                  </View>
                  <Price oldPrice={oldPrice} actualPrice={actualPrice} />
                </View>
              </View>
            );
          }
        )}
      </View>
    </ScrollView>
  );
};

export default Clothes;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "145%",
  },
});
