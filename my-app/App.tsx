import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Switch, Text, View } from "react-native";
// import { ThemeProvider } from "@rneui/themed";

import Main from "./conteners/Main";
import { useState, useCallback } from "react";

import { themes } from "./assets/theme";
import SearchBox from "./components/SearchBox";
import User from "./components/User";
import CardList from "./components/CardList";
import { useColorScheme } from "nativewind";

export type Data = {
  avatar_url: string;
  followers: string | number;
  following: string | number;
  login: string;
  public_repos: string | number;
  message: string;
};

export default function App() {
  const [ThemeState, setThemeState] = useState("light");
  const [data, setData] = useState<Data>();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  console.log(colorScheme)

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
    <SafeAreaView className=" h-full w-full dark:bg-gray-900 dark:text-slate-50">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        className=" h-full p-4 mx-auto "
      >
        <StatusBar style="auto" />

        <View className=" w-full h-max  flex-row justify-between items-center   mt-6 p-3">
          <Text className="dark:text-white text-2xl  flex justify-center items-center w-48 p-3 h-auto ">
            GIT STATS
          </Text>

          <Switch
            value={colorScheme == "dark"}
            onChange={toggleColorScheme}
            className="border w-16 bg-opacity-0 "
          />
        </View>

        <SearchBox onSearch={search} />

        <View className=" border-2 border-blue-400 rounded-lg">
          {/* if the data is available then it will show the below content */}

          {data?.avatar_url == undefined ? (
            // <NotFoun />
            <>
              <View className="h-auto justify-center items-center">
                <Text className=" dark:text-blue-50 text-xl font-semibold m-12 ">
                  {" "}
                  {data?.message}
                </Text>
              </View>
            </>
          ) : (
            <>
              <User src={data?.avatar_url} username={data?.login} />
              <CardList data={data} />
            </>
          )}
        </View>

        {/* <Main setTheme={setThemeState} Theme={themes[ThemeState]}  /> */}
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
