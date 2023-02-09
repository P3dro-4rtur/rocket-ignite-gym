import React from "react";
import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Loader } from "@components/Loader";
import { THEME } from "~/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor={"transparent"}
      />
      {fontsLoaded && <Loader />}
    </NativeBaseProvider>
  );
}
