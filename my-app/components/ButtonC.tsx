import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { ThemeDataType } from "../assets/theme";

interface Iprops {
  Theme: ThemeDataType;
  setTheme: (value: string) => void;
}

const ButtonC = ({ Theme, setTheme }: Iprops) => {
  const [currTheme, setCurrTheme] = useState(Theme.name);

  function fun() {
    if (currTheme === "light") {
      setTheme("dark");
      setCurrTheme("dark");
    } else {
      setTheme("light");
      setCurrTheme("light");
    }
  }

  return (
    <View>
      <Text>hello button</Text>
      <Button
        onPress={() => {
          fun();
        }}
        // disabled={!isHungry}
        title={currTheme ? "dark" : "light"}
      />
    </View>
  );
};

export default ButtonC;
