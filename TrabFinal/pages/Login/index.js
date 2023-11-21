import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MeuInput from "../../components/Input/index";
import Botao from "../../components/Botao/index";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const NavLogin = () => {
    if (username === "Lucas" && password === "123456") {
      setPassword("");
      setUsername("");
      alert("Login bem-sucedido!");

      // limpar o terminal apos login

      navigation.navigate("Home");
    } else if (username === "" && password === "") {
      alert("Campos vazios!. Tente novamente.");
    } else {
      alert("Credenciais invalidas. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../Img/logo.jpg")}
          style={{ width: 60, height: 60 }}
        />
        <Text style={styles.saudacao}>
          All<Text style={{ color: "#FF5722" }}>Foot</Text>Wears
        </Text>
        <MeuInput
          label="Login"
          placeholder="Ex@gmail.com"
          setValor={setUsername}
        />
        <MeuInput
          label="Senha"
          placeholder="*****"
          comMascara={true}
          setValor={setPassword}
        />
        <Botao texto="Entrar" acao={NavLogin} />
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
    fontWeight: "700",
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
  },
});
