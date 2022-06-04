import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

import { Navigation } from "./src/navigation/Navigation";

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </TailwindProvider>
  );
}
