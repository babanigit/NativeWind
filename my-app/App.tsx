import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
// import { ThemeProvider } from "@rneui/themed";

import Main from "./conteners/Main";
import { useState } from "react";

import { themes } from "./assets/theme";



export default function App() {
  const[ThemeState,setThemeState]= useState("light");
  return (
    <View 
    className=" h-screen w-full flex"
    >
    {/* <Text>hello</Text> */}
      <Main setTheme={setThemeState} Theme={themes[ThemeState]}  />
    </View>
    // <ThemeProvider>
    //   <Main />
    // </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
