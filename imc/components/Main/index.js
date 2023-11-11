import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Main() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");
  const [messageImc, setMessageImc] = useState("preencha os dados");

  const validarImc = () => {
    if (peso !== 0 || altura !== 0) {
      calcularImc();
      console.log({ imc });
    }
  };
  const calcularImc = () => {
    if (peso && altura) {
      const peso = parseFloat(peso);
      const altura = parseFloat(altura);
      const imc = peso / (altura * altura);
      setImc(imc.toFixed(2));
      setPeso("");
      setAltura("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Seu peso"
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Seu altura"
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={validarImc}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 25,
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  listItem: {
    width: 200,
    alignItems: "center",
    backgroundColor: "lightgrey",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  textList: {
    color: "black",
    fontSize: 20,
  },
  btn: {
    backgroundColor: "royalblue",
    width: 120,
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    color: "white",
  },
});
