import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const Inputs = ({
  passwordVisible,
  togglePasswordVisibility,
  handlePasswordChange,
  setShowPasswordRequirements,
}) => {
  return (
    <View className='flex-col flex justify-center px-8 space-y-4'>
      <View className='flex flex-row  space-x-4 pt-10'>
        <View className=' flex flex-row pl-4 py-4 rounded-md border-2 border-[#D0DBEA] w-full focus:border-[#1FCC79]'>
          <Image
            source={{ uri: "https://i.postimg.cc/ZYWHy3GM/Message.png" }}
            className='w-7 h-7'
          />
          <TextInput
            textContentType='name'
            placeholder='Full name'
            placeholderTextColor={"#9FA5C0"}
            className='w-full pl-2 text-gray-500 text-sm appearance-none'
          ></TextInput>
        </View>
      </View>
      <View className=' flex flex-row  pl-4 py-4 rounded-md border-2 border-[#D0DBEA] w-full focus:border-[#1FCC79]'>
        <Image
          source={{ uri: "https://i.postimg.cc/ZYWHy3GM/Message.png" }}
          className='w-7 h-7'
        />
        <TextInput
         placeholderTextColor={"#9FA5C0"}
          textContentType='emailAddress'
          placeholder='Date of birth'
          className='w-full pl-2 text-gray-500 text-sm appearance-none'
        ></TextInput>
      </View>
      <View className=' flex flex-row pl-4 py-4 rounded-md border-2 border-[#D0DBEA] w-full focus:border-[#1FCC79]'>
        <Image
          source={{ uri: "https://i.postimg.cc/ZYWHy3GM/Message.png" }}
          className='w-7 h-7'
        />
        <TextInput
         placeholderTextColor={"#9FA5C0"}
          textContentType='emailAddress'
          placeholder='Email or phone number'
          className='w-full pl-2 text-gray-500 text-sm appearance-none'
        ></TextInput>
      </View>
      <View className='flex flex-row  justify-between '>
        <View className=' flex flex-row pl-4 py-4 rounded-md border-2 border-[#D0DBEA] w-full focus:border-[#1FCC79]'>
          <Image
            source={{ uri: "https://i.postimg.cc/3x8nN6Yg/Lock.png" }}
            className='w-7 h-7'
          />
          <TextInput
           placeholderTextColor={"#9FA5C0"}
            textContentType='password'
            secureTextEntry={!passwordVisible}
            placeholder='Password'
            onFocus={() => setShowPasswordRequirements(true)}
            onBlur={() => setShowPasswordRequirements(true)}
            onEndEditing={() => setShowPasswordRequirements(false)}
            onChangeText={handlePasswordChange}
            className='w-full pl-2 text-gray-500 text-sm appearance-none'
          ></TextInput>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={{ uri: "https://i.postimg.cc/bN8RVMGK/Show.png" }}
              className='w-7 h-7 relative right-20'
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Inputs;
