import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  const { additionalStyles } = props;
  return (
    <View style={{ ...styles.inputContainer, ...additionalStyles }}>
{props.children}</View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    // shadow properties only work on iOS, not Android, use elevation properties for Android
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10
  }
});
export default Card;
