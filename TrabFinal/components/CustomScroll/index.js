import { ScrollView, Text, StyleSheet } from "react-native";
import React from "react";

export default function CustomScroll() {
  const items = [
    "  Frete Gratis para RJ | SP | MG |      ",
    '            Cupom para PRIMEIRA compra "AFWs10"',
  ];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={style.scrollF}
    >
      {items.map((item, index) => (
        <Text key={index} style={style.txtSF}>
          {item}
        </Text>
      ))}
      {items.map((item, index) => (
        <Text key={index + items.length} style={style.txtSF}>
          {item}
        </Text>
      ))}
      {items.map((item, index) => (
        <Text key={index + items.length} style={style.txtSF}>
          {item}
        </Text>
      ))}
      {items.map((item, index) => (
        <Text key={index + items.length} style={style.txtSF}>
          {item}
        </Text>
      ))}
      {items.map((item, index) => (
        <Text key={index + items.length} style={style.txtSF}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  scrollF: {
    backgroundColor: "#FFFAF8",
  },
  txtSF: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
});
