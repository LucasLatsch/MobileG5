import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Animated,
  StatusBar,
  Modal,
  FlatList,
} from "react-native";
import React, { useState, useRef } from "react";
import CustomScroll from "../../components/CustomScroll";
import ModalComponent from "../../components/Modal";

const DATA = [
  {
    id: "1",
    nome: "Slipstrean",
    marca: "Puma",
    cor: "Branco/Azul",
    preco: "R$399,99",
    imagem: require("../../assets/PumaSlips.jpg"),
  },
  {
    id: "2",
    nome: "Dunk Low Panda",
    marca: "Nike",
    cor: "Branco/Preto",
    preco: "R$999,99",
    imagem: require("../../assets/NikePanda.jpg"),
  },
  {
    id: "3",
    nome: "Converse",
    marca: "Converse",
    cor: "Verde",
    preco: "R$299,99",
    imagem: require("../../assets/converse.jpg"),
  },
  {
    id: "4",
    nome: "Wavy",
    marca: "Vans",
    cor: "Branco",
    preco: "R$599,99",
    imagem: require("../../assets/vanswavyeshoe.jpg"),
  },
  {
    id: "5",
    nome: "Air Force 1 Coff",
    marca: "Nike",
    cor: "Bege",
    preco: "R$799,99",
    imagem: require("../../assets/nikeplusF.jpg"),
  },
  {
    id: "6",
    nome: "Air Force 1 Coff",
    marca: "Nike",
    cor: "Marrom",
    preco: "R$799,99",
    imagem: require("../../assets/nikeplusF.jpg"),
  },
];

export default function Home() {
  const Item = ({ item }) => (
    <>
      <TouchableOpacity onPress={() => setExibirModal(true)}>
        <View style={style.item}>
          <Image style={style.img} source={item.imagem} />
          <View>
            <Text style={style.email}>{item.nome}</Text>
            <Text style={style.email}>{item.marca}</Text>
            <Text style={style.email}>{item.cor}</Text>
            <Text style={style.email}>{item.preco}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal visible={exibirModal} transparent={true}>
        <ModalComponent
          handleClose={() => setExibirModal(false)}
          handleSalvar={() => alert("Produto salvo com sucesso")}
          nome={item.nome}
          marca={item.marca}
          cor={item.cor}
          preco={item.preco}
        />
      </Modal>
    </>
  );

  const scrollY = useRef(new Animated.Value(0)).current;
  const [searchBarFocused, setSearchBarFocused] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 50],
    extrapolate: "clamp",
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#e2e2e2"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Animated.View>
        <Text style={style.headerText}>
          ALL<Text style={{ color: "#FB6572" }}>FOOT</Text>WEARS
        </Text>
      </Animated.View>

      <Animated.View style={[style.header, { height: headerHeight }]}>
        <TextInput
          placeholder="Pesquisar..."
          style={[style.searchBar, { opacity: searchBarFocused ? 1 : 0.7 }]}
          onFocus={() => setSearchBarFocused(true)}
          onBlur={() => setSearchBarFocused(false)}
        />
        <TouchableOpacity style={style.searchIcon}>
          <Text>🔍</Text>
        </TouchableOpacity>
      </Animated.View>

      <ScrollView
        vertical
        style={style.scrollV}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <CustomScroll />
        <ScrollView
          horizontal
          style={style.scroll}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={style.card}>
            <Image
              source={require("../../assets/ascis.jpg")}
              style={style.image}
            />
          </View>
          <View style={style.card}>
            <Image
              source={require("../../assets/newBalance.jpg")}
              style={style.image}
            />
          </View>
          <View style={style.card}>
            <Image
              source={require("../../assets/jordanroxo.jpg")}
              style={style.image}
            />
          </View>
          <View style={style.card}>
            <Image
              source={require("../../assets/adidas.jpg")}
              style={style.image}
            />
          </View>
        </ScrollView>
        <View style={style.container}>
          <FlatList
            data={DATA}
            renderItem={Item}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  card: {
    width: 250,
    height: 250,
    backgroundColor: "#FFFAF8",
    marginLeft: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 51,
  },
  cardV: {
    width: 350,
    height: 300,
    backgroundColor: "#000000",
    margin: 35,
    alignItems: "center",
    borderRadius: 51,
  },
  cardVText: {
    margin: 12,
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
  },
  scroll: {
    marginTop: 10,
    backgroundColor: "#E2E2E2",
    height: 260,
  },
  scrollV: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  btnHeader: {
    width: 100,
    height: 40,
    padding: 10,
    backgroundColor: "#FB6572",
    borderRadius: 8,
    alignItems: "center",
  },
  btnHeaderText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "ultralight",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#000000",
    elevation: 2,
    zIndex: 2,
  },
  headerText: {
    fontWeight: "condensedBold",
    fontSize: 35,
    fontFamily: "Roboto",
    color: "#FFFFFF",
    paddingLeft: 7,
  },
  image: {
    height: 225,
    width: 225,
    borderRadius: 43,
  },
  imageSV: {
    height: 225,
    width: 325,
    borderRadius: 43,
    marginTop: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: "#F3F3F3",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginLeft: 16,
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
