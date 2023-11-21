import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ModalComponent({
  handleClose,
  handleSalvar,
  nome,
  marca,
  cor,
  preco,
}) {
  return (
    <SafeAreaView style={style.containerModal}>
      <ScrollView vertical style={style.scrollV}>
        {/* <View style={style.cMView}>
          <Image
            source={require("../../assets/nikeplusF.jpg")}
            style={style.imageSV}
          />
        </View>
        <View style={style.cMView}>
          <Image
            source={require("../../assets/nikeplus.jpg")}
            style={style.imageSV}
          />
        </View>
        <View style={style.cMView}>
          <Image
            source={require("../../assets/nikeplusC.jpg")}
            style={style.imageSV}
          />
        </View>
        <View style={style.cMView}>
          <Image
            source={require("../../assets/nikeplusLS.jpg")}
            style={style.imageSV}
          />
        </View>
        <View style={style.cMView}>
          <Image
            source={require("../../assets/nikeplusT.jpg")}
            style={style.imageSV}
          />
        </View> */}
        <Text>{nome}</Text>
        <Text>{marca}</Text>
        <Text>{cor}</Text>
        <Text>{preco}</Text>
        <TouchableOpacity style={style.btn} onPress={handleClose}>
          <Text style={style.textobtn}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn} onPress={handleSalvar}>
          <Text style={style.textobtn}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
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
