import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import MeuInput from "../../components/Input";
import Botao from "../../components/Botao";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../Img/1785348.ico")}
          style={{ width: 60, height: 60 }}
        />
        <Text style={styles.saudacao}>
          All<Text style={{ color: "#FF5722" }}>Foot</Text>Wears
        </Text>
        <MeuInput label="Login" placeholder="Exemplo@gmail.com" />
        <MeuInput label="Senha" placeholder="*****" />
        <Botao texto="Entrar" />
        <Botao texto="Cadastrar" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e2e2e2",
    width: "100%",
    justifyContent: "center",
  },

  saudacao: {
    marginBottom: 50,
    fontSize: 30,
    fontWeight: "bolder",
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
  },
});
