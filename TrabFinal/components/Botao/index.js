import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Botao(props) {
  const defineLargura = () => {
    if (props.largura) {
      return (
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#FF5722",
            padding: 8,
            width: props.largura,
            borderRadius: 4,
            marginTop: 5,
          }}
        >
          <TouchableOpacity onPress={props.acao}>
            <Text style={styles.texto}>{props.texto}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={props.acao}>
            <Text style={styles.texto}>{props.texto}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return <View>{defineLargura()}</View>;
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
