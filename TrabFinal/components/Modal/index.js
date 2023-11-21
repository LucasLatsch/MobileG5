import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from "react-native";

const ModalComponent = ({
  handleClose,
  handleSalvar,
  nome,
  marca,
  cor,
  preco,
  imagem,
}) => {
  console.log("Props recebidas na modal:", { nome, marca, cor, preco, imagem });
  return (
    <SafeAreaView style={styles.containerModal}>
      <ScrollView vertical style={styles.scrollV}>
        <View style={styles.cMView}>
          <Image source={imagem} style={styles.imageSV} />
        </View>
        <Text>{nome}</Text>
        <Text>{marca}</Text>
        <Text>{cor}</Text>
        <Text>{preco}</Text>
        <TouchableOpacity style={styles.btn} onPress={handleClose}>
          <Text style={styles.textobtn}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleSalvar}>
          <Text style={styles.textobtn}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255, 255, 255)",
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
  cMView: {
    alignItems: "center",
    justifyContent: "center",
  },
  textoModal: {
    paddingTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  imageSV: {
    height: 225,
    width: 325,
    borderRadius: 43,
    marginTop: 10,
  },
  scrollV: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
});

export default ModalComponent;
