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
    if (peso && altura) {
      calcularImc();
    }

    console.log({ altura });
    console.log({ peso });
  };
  const calcularImc = () => {
    setImc(peso / (altura * altura).toFixed(2));
    setPeso(0);
    setAltura(0);
    console.log({ imc });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu peso"
            value={peso.toString()}
            onChangeText={(text) => setPeso(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Altura</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua altura"
            value={altura.toString()}
            onChangeText={(text) => setAltura(text)}
          />
        </View>
        <View style={styles.btncard}>
          <TouchableOpacity style={styles.btn} onPress={validarImc}>
            <Text style={styles.btnText}>Calcular</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewcontainer}>
          <Text style={styles.result}>{imc}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8EB7F5",
    padding: 120,
    borderRadius: 5,
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
    backgroundColor: "#EBF3FF",
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
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  btnText: {
    color: "white",
  },
  label: {
    fontSize: 25,
  },
  card: {
    padding: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "#5173A8",
  },
  btncard: {
    alignItems: "center",
  },
  viewcontainer: {
    backgroundColor: "#EBF3FF",
    borderRadius: 10,
    marginTop: 20,
  },
  result: {
    fontSize: 25,
    textAlign: "center",
  },
});
