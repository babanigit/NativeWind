import React from "react";
import { View,Text } from "react-native";
import { ThemeDataType } from "../assets/theme";

import ButtonC from "../components/ButtonC";


interface Iprops {
    setTheme:(value:string)=>void;
    Theme:ThemeDataType;
}

const Main = ({Theme,setTheme}:Iprops) => {
  return (
    <>
      <View
          style={{backgroundColor:Theme.body,
          }}
          className=" h-screen w-full flex justify-center items-center"
      >
        <Text> Theme changer </Text>
        <ButtonC Theme={Theme} setTheme={setTheme} />
      </View>
    </>
  );
};

export default Main;
