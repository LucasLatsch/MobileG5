import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  StatusBar,
  Modal,
  FlatList,
  View,
} from "react-native";
import axios from "axios";
import ModalComponent from "../../components/Modal";
import Botao from "../../components/Botao";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    nome: "Slipstream",
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
const url = "https://65495a57dd8ebcd4ab2483d2.mockapi.io/login";
const Home = () => {
  const [exibirModal, setExibirModal] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [produto, setProduto] = useState([]);
  const [cadastro, setCadastro] = useState(true);

  const getProduto = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setProduto(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduto();
  }, []);

  function defineStar(classi) {
    switch (classi) {
      case "1":
        return <Ionicons name="star" color={"#FFD200"} />;
      case "2":
        return (
          <View style={styles.star}>
            <Ionicons name="star" color={"#FFD200"} />
            <Ionicons name="star" color={"#FFD200"} />
          </View>
        );
      case "3":
        return (
          <View style={styles.star}>
            <Ionicons name="star" color={"#FFD200"} />
            <Ionicons name="star" color={"#FFD200"} />
            <Ionicons name="star" color={"#FFD200"} />
          </View>
        );
      case "4":
        return (
          <View style={styles.star}>
            <Ionicons name="star" color={"#FFD200"} />
            <Ionicons name="star" color={"#FFD200"} />
            <Ionicons name="star" color={"#FFD200"} />
            <Ionicons name="star" color={"#FFD200"} />
          </View>
        );
      case "5":
        return (
          <View style={styles.star}>
            <Ionicons name="star" color={"#FFD200"} />
            <Ionicons name="star" color={"#FFD200"} />
            <Ionicons name="star" color={"#FFD200"} />
            <Ionicons name="star" color={"#FFD200"} />
            <Ionicons name="star" color={"#FFD200"} />
          </View>
        );
      default:
        return;
    }
  }
  const Item = ({ item }) => (
    <>
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View style={styles.item}>
          <Image style={styles.img} source={item.imagem} />
          <View>
            <Text style={styles.email}>{item.nome}</Text>
            <Text style={styles.email}>{item.marca}</Text>
            <Text style={styles.email}>{item.cor}</Text>
            {/* <Text style={styles.email}>{item.classi}</Text> */}
            {defineStar(item.classi)}
            <Text style={styles.email}>{item.review}</Text>
            <Text style={styles.email1}>${item.precoIni}</Text>
            <Text style={styles.email}>{item.precoFin}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal visible={exibirModal} transparent={true}>
        <ModalComponent
          handleClose={() => setExibirModal(false)}
          handleSalvar={handleSalvar}
          handleDeletar={handleDeletar}
          handleCadastrar={handleCadastrar}
          result={itemSelecionado}
          cadastro={cadastro}
          setCadastro={setCadastro}
          {...itemSelecionado}
        />
      </Modal>
    </>
  );
  const handleDeletar = async (id) => {
    console.log("Excluir produto: " + id);
    try {
      setExibirModal(false);
      const { data } = await axios.delete(`${url}/${id}`);

      // const novoArray = produto.filter((item) => item.id != id);
      // setProduto(novoArray);
      getProduto();
    } catch (error) {
      console.log(error);
    }
  };
  const handleItemPress = (item) => {
    setCadastro(false);
    console.log("Item selecionado:", item);
    setItemSelecionado(item);
    setExibirModal(true);
  };

  const handlePress = () => {
    setCadastro(true);
    console.log("Nenhum Item selecionado:");
    setExibirModal(true);
  };

  const handleSalvar = async (id, valores) => {
    try {
      setExibirModal(false);
      console.log("Atualizar produto: " + id);
      const { data } = await axios.put(`${url}/${id}`, valores);
      console.log(data);
      getProduto();
      // console.log(produto);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCadastrar = async (valores) => {
    try {
      setExibirModal(false);
      console.log("Criando novo produto");
      const { data } = await axios.post(url, valores);
      console.log(data);
      getProduto();
      // console.log(produto);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#e2e2e2"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      <ScrollView vertical style={styles.scrollV} scrollEventThrottle={16}>
        <View style={styles.container}>
          <View style={styles.btn}>
            <Botao texto="Cadastrar" acao={handlePress} />
          </View>
          <FlatList
            data={produto}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>

      {/* {exibirModal && itemSelecionado && (
        <ModalComponent
          handleClose={() => setExibirModal(false)}
          handleSalvar={() => alert("Produto salvo com sucesso")}
          {...itemSelecionado}
        />
      )} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  star: {
    flexDirection: "row",
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
  img: {
    borderRadius: 25,
    width: 100,
    height: 100,
  },
  email: {
    fontSize: 15,
  },
  email1: {
    fontSize: 15,
    textDecorationLine: "line-through",
  },
  scrollV: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  btn: {
    alignItems: "center",
  },
});

export default Home;
