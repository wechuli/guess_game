import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>

      <Card additionalStyles={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input style={styles.input} blurOnSubmit autoCapitalize="none" />
        <View style={styles.buttonContainer}>
          <View style={styles.singleButton}>
            <Button title="Reset" onPress={() => {}} color={colors.accent} />
          </View>
          <View style={styles.singleButton}>
            <Button title="Confirm" onPress={() => {}} color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  singleButton: {
    width: 100,
    margin: 5
  },
  input: {
    width: 50,
    textAlign: "center"
  }
});

export default StartGameScreen;
