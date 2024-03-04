import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
// import { ThemeProvider } from "@rneui/themed";

import Main from "./conteners/Main";
import { useState } from "react";

import { themes } from "./assets/theme";
import SearchBox from "./components/SearchBox";

export default function App() {
  const [ThemeState, setThemeState] = useState("light");
  return (
    <SafeAreaView
      // style={{backgroundColor:}}
      className=" h-full w-full  bg-black text-slate-50"
    >

      <ScrollView
       keyboardShouldPersistTaps="handled"
       className=" h-screen"
       >


      


      <Text className=" text-slate-50 ">hello there</Text>
      <SearchBox />

      {/* <Main setTheme={setThemeState} Theme={themes[ThemeState]}  /> */}
      {/* <StatusBar style="auto" /> */}


      </ScrollView>



    </SafeAreaView>
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
