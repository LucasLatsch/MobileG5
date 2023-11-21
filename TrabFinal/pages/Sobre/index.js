import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    nome: "Lucas",
    email: "Lucas@gmail.com",
    imagem: "https://avatars.githubusercontent.com/u/141193394?v=4",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    nome: "Liliane",
    email: "Liliane@gmail.com",
    imagem: "https://avatars.githubusercontent.com/u/117579849?v=4",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    nome: "Jose",
    email: "Jose@gmail.com",
    imagem: "https://avatars.githubusercontent.com/u/106778374?v=4",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    nome: "Matheus",
    email: "Matheus@gmail.com",
    imagem: "https://avatars.githubusercontent.com/u/141193943?v=4",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    nome: "Edu",
    email: "Edu@gmail.com",
    imagem: "https://avatars.githubusercontent.com/u/141246270?v=4",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    nome: "Paloma",
    email: "Paloma@gmail.com",
    imagem: "https://avatars.githubusercontent.com/u/141692596?v=4",
  },
];

const Item = ({ item }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={{ uri: item.imagem }} />
    <View>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  </View>
);

export default function Sobre() {
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
