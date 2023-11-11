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
    backgroundColor: "grey",
    padding: 50,
    position: "fixed",
    width: 1000,
  },
  title: {
    fontSize: 35,
  },
});
