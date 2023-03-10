import React from "react";
import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { THEME } from "~/theme";
import { Loader } from "@components/Loader";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { SignIn } from "~/screens/SignIn";
import { SignUp } from "~/screens/SignUp";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor={"transparent"}
      />
      {fontsLoaded ? <SignUp /> : <Loader />}
    </NativeBaseProvider>
  );
}
