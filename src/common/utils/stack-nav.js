import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstSlide from "../../screens/first-slide";
import SecondSlide from "../../screens/second-slide";
import ThirdSlide from "../../screens/third-slide";
import SignIn from "../../screens/sign-in";
import SignUp from "../../screens/sign-up";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='first' component={FirstSlide} />
      <Stack.Screen name='second' component={SecondSlide} />
      <Stack.Screen name='third' component={ThirdSlide} />
      <Stack.Screen name='sign-in' component={SignIn} />
      <Stack.Screen name='sign-up' component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackNav;
