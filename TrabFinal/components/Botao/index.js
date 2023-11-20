import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Botao(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.texto}>{props.texto}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FF5722",
    padding: 8,
    width: 195,
    borderRadius: 4,
    marginTop: 5,
  },
  texto: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
});
