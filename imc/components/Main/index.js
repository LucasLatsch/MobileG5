import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  _View,
} from "react-native";

export default function Main() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");
  const [messageImc, setMessageImc] = useState("");

  const validarImc = () => {
    if (peso > 0 && altura > 0) {
      calcularImc();
      const P = imc;
      if (P <= 18.5) {
        setMessageImc("Magreza");
        console.log(P);
      }
      if (P > 18.5 && imc <= 24.9) {
        setMessageImc("Normal");
      }
      if (P > 29.9) {
        setMessageImc("Sobrepeso");
      }
      if (P > 34.9) {
        setMessageImc("Obesidade grau 1");
      }
      if (P > 24.9) {
        setMessageImc("Obesidade grau 3");
      }
      if (P > 39.9) {
        setMessageImc("Obesidade grau 3");
      }
      setAltura("");
      setPeso("");
    } else {
      setMessageImc("Campos vazios, tente novamente");
      setAltura("");
      setPeso("");
      setImc("");
    }
  };
  const calcularImc = () => {
    setImc(peso / (altura * altura).toFixed(2));
    setPeso("");
    setAltura("");
    retornoMsg();
  };

  const retornoMsg = () => {
    const P = imc;
    if (imc <= 18.5) {
      setMessageImc("Magreza");
    }
    if ({ imc } > 18.5 && imc <= 24.9) {
      setMessageImc("Normal");
    }
    if ({ imc } > 29.9) {
      setMessageImc("Sobrepeso");
    }
    if (imc > 34.9) {
      setMessageImc("Obesidade grau 1");
    }
    if (imc > 24.9) {
      setMessageImc("Obesidade grau 3");
    }
    if (imc > 39.9) {
      setMessageImc("Obesidade grau 3");
    }
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
          <Text style={styles.result}>{messageImc}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8EB7F5",
    paddingTop: 120,
    paddingBottom: 120,
    padding: 55,
    borderRadius: 25,
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
    boxSizing: "border-box",
  },
});
