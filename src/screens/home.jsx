import { View, Platform } from "react-native";
import React from "react";
import NavBar from "../common/layout/nav-bar";
import HomeComponent from "../components/sections/Home/home";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation()
  return (
    <>
      <View className={`absolute bg-white bottom-0  w-screen h-[8%]`}>
        <NavBar />
      </View>
      <View className='-z-10 w-screen h-screen'>
        <HomeComponent navigation={navigation} />
      </View>
    </>
  );
};

export default Home;
