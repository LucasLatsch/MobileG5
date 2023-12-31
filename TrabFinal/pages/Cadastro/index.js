import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MeuInput from "../../components/Input/index";
import Botao from "../../components/Botao/index";

export default function Cadastro() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const navigation = useNavigation();

  const NavBack = () => {
    navigation.navigate("Login");
  };

  const NavLogin = () => {
    const storedUsernames = [];
    const storedPasswords = [];
    if (username === "" || password === "" || passwordConf === "") {
      setPassword("");
      setPasswordConf("");
      setUsername("");
      alert("Campos vazios!");
    } else if (password !== passwordConf) {
      setPassword("");
      setPasswordConf("");
      setUsername("");
      alert("Conflito entre senhas, confira e tente novamente!");
    } else {
      alert("Cadastro Bem Sucedido!");
      storedUsernames.push(username);
      storedPasswords.push(password);
      localStorage.setItem("usernames", JSON.stringify(storedUsernames));
      localStorage.setItem("passwords", JSON.stringify(storedPasswords));
      console.log(username);
      console.log(password);
      console.log(passwordConf);
      navigation.navigate("Login");
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
          placeholder="**********"
          comMascara={true}
          setValor={setPassword}
        />
        <MeuInput
          label="Confirmação da Senha"
          placeholder="**********"
          comMascara={true}
          setValor={setPasswordConf}
        />
        <Botao texto="Cadastrar" acao={NavLogin} />
        <Botao texto="Voltar" acao={NavBack} />
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
