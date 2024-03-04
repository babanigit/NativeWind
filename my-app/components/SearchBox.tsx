import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

type Props = {
    onSearch:Function
};

const SearchBox = ({onSearch}: Props) => {
  const [userName, setUserName] = useState<string>("");
  return (
    <View className=" flex flex-row justify-evenly items-center space-x-4 mx-auto mt-5">
         {/* <View className=" grid grid-flow-col grid-cols-3 "> */}
      <TextInput
        placeholder="Enter the username here..."
        onChangeText={(text: string) => {
            setUserName(text);
          }}
          className=" border-2 rounded-md px-4 p-2 m-3 border-white text-white "
        placeholderTextColor="#ffffff"
      />
      <Pressable className=" bg-blue-400 h-11 rounded-lg w-24 m-3 border-2 border-blue-800 justify-center items-center"
      onPress={()=>{onSearch(userName)}}
      >
        <Text> Search </Text>
        </Pressable>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
