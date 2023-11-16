import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function CalculadoraC() {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const calcular = () => {
    if (!gasolina || !alcool) {
      setResultado("Valor inválido!");
      setModalVisible(true);
    } else if (!isNaN(alcool) && !isNaN(gasolina)) {
      const resultadoCalculo = parseFloat(alcool) / parseFloat(gasolina);

      if (resultadoCalculo < 0.7) {
        setResultado("Abasteça com álcool!");
      } else {
        setResultado("Abasteça com gasolina.");
      }

      setModalVisible(true);
    } else {
      setResultado("Valor inválido!");
      setModalVisible(true);
    }
  };

  const calcularNovamente = () => {
    setAlcool("");
    setGasolina("");
    setResultado("");
    setModalVisible(false);
  };

  return (
    <View style={style.container}>
      <Image source={require("../../assets/bomba.jpg")} style={style.imagem} />
      <Text style={style.texto}>Qual a melhor opção?</Text>
      <View style={style.input}>
        <TextInput
          style={style.inputs}
          placeholder="Preço do álcool"
          keyboardType="numeric"
          value={alcool}
          onChangeText={(text) => setAlcool(text)}
        />
        <TextInput
          style={style.inputs}
          placeholder="Preço da gasolina"
          keyboardType="numeric"
          value={gasolina}
          onChangeText={(text) => setGasolina(text)}
        />
      </View>
      <TouchableOpacity style={style.btn} onPress={calcular}>
        <Text style={style.textobtn}>Calcular</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={style.containerModal}>
          <Text style={style.textoModal}>{resultado}</Text>
          <TouchableOpacity style={style.btn} onPress={calcularNovamente}>
            <Text style={style.textobtn}>Calcular Novamente</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  inputs: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    padding: 10,
    width: 170,
    backgroundColor: "white",
    fontSize: 18,
  },
  input: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  texto: {
    paddingTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  imagem: {
    borderRadius: 100,
    width: 200,
    height: 200,
    padding: 40,
  },
  btn: {
    width: 200,
    backgroundColor: "royalblue",
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textobtn: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  containerModal: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    margin: 150,
    marginLeft: 55,
  },
  textoModal: {
    paddingTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
});
