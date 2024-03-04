import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
// import { ThemeProvider } from "@rneui/themed";

import Main from "./conteners/Main";
import { useState, useCallback } from "react";

import { themes } from "./assets/theme";
import SearchBox from "./components/SearchBox";
import User from "./components/User";
import CardList from "./components/CardList";

export type Data = {
  avatar_url: string;
  followers: string | number;
  following: string | number;
  login: string;
  public_repos: string | number;
};

export default function App() {
  const [ThemeState, setThemeState] = useState("light");
  const [data, setData] = useState<Data>();

  const search = useCallback(async (searchTerm: string) => {
    if (searchTerm == "") {
      alert("please enter something");
      // return;
    } else {
      const res = await fetch(`https://api.github.com/users/${searchTerm}`);
      const data = await res.json();
      console.log(data);
      setData(data);
    }
    // fetch(`https://api.github.com/users/${searchTerm}`).then((res)=> {res.json()}).then((data)=>{console.log(data)})
  }, []);

  return (
    <SafeAreaView className=" h-full w-full   bg-black text-slate-50">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        className=" h-full p-4 mx-auto "
      >
        <SearchBox onSearch={search} />

        <View className=" border-2 border-blue-400 rounded-lg">

          {/* if the data is available then it will show the below content */}
          {data && (
            <>
              <User src={data?.avatar_url} username={data?.login} />
              <CardList data={data} />
            </>
          )}
        </View>

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
