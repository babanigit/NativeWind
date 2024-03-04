import React from "react";
import { View, Text } from "react-native";
import { ThemeDataType } from "../assets/theme";

import ButtonC from "../components/ButtonC";

interface Iprops {
  setTheme: (value: string) => void;
  Theme: ThemeDataType;
}

const Main = ({ Theme, setTheme }: Iprops) => {
  return (
    <>
      <View
        className=" h-full w-screen"
        style={{ backgroundColor: Theme.body }}
      >
        <View className=" h-screen w-full bg-red-400" > 
        <Text> Theme changer </Text>
        <ButtonC Theme={Theme} setTheme={setTheme} />

        </View>
   
      </View>
    </>
  );
};

export default Main;
