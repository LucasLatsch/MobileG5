import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    nome: "Slipstrean",
    marca: "Puma",
    cor: "Branco/Azul",
    preco: "R$399,99",
    imagem: "../../assets/PumaSlips.jpg",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
    nome: "Dunk Low Panda",
    marca: "Nike",
    cor: "Branco/Preto",
    preco: "R$999,99",
    imagem: "../../assets/NikePanda.jpg",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
    nome: "Converse",
    marca: "Converse",
    cor: "Verde",
    preco: "R$299,99",
    imagem: "../../assets/converse.jpg",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
    nome: "Wavy",
    marca: "Vans",
    cor: "Branco",
    preco: "R$599,99",
    imagem: "../../assets/vanswavyeshoe.jpg",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28be",
    nome: "Air Force 1 Coffee",
    marca: "Nike",
    cor: "Bege",
    preco: "R$799,99",
    imagem: "../../assets/vanswavyeshoe.jpg",
  },
];

const Item = ({ item }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={require(item.imagem)} />
    <View>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.nome}>{item.marca}</Text>
      <Text style={styles.nome}>{item.cor}</Text>
      <Text style={styles.nome}>{item.preco}</Text>
    </View>
  </View>
);

export default function Produtos() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: "#F9F9F9",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  nome: {
    fontSize: 32,
  },
  email: {
    fontSize: 15,
  },
  img: {
    borderRadius: 25,
    width: 100,
    height: 100,
  },
});
