import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Header() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Consulte seu IMC</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    top: 0,
    backgroundColor: "#5173A8",
    padding: 50,
    position: "absolute",
    width: 450,
  },
  title: {
    fontSize: 35,
    fontFamily: "sans-serif",
    color: "#000",
  },
});
