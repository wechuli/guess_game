import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import { name as appName } from "./app.json";
import GameScreen from "./screens/GameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
      <GameScreen/>
    </View>
  );
}
AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
