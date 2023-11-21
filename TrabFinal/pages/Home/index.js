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
  axios,
} from "react-native";
import ModalComponent from "../../components/Modal";
import Botao from "../../components/Botao";

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

  const Item = ({ item }) => (
    <>
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View style={styles.item}>
          <Image style={styles.img} source={item.imagem} />
          <View>
            <Text style={styles.email}>{item.nome}</Text>
            <Text style={styles.email}>{item.marca}</Text>
            <Text style={styles.email}>{item.cor}</Text>
            <Text style={styles.email}>{item.preco}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal visible={exibirModal} transparent={true}>
        <ModalComponent
          handleClose={() => setExibirModal(false)}
          handleSalvar={atualizarProdutos}
          handleDeletar={handleDeletar}
          {...itemSelecionado}
        />
      </Modal>
    </>
  );
  const handleDeletar = async (id) => {
    console.log("Excluir produto: ", id);
    try {
      const { data } = await axios.delete(`${url}/${id}`);
      console.log(data);
      const novoArray = produto.filter((item) => item.id != id);
      setProduto(novoArray);
    } catch (error) {
      console.log(error);
    }
  };
  const handleItemPress = (item) => {
    console.log("Item selecionado:", item);
    setItemSelecionado(item);
    setExibirModal(true);
  };
  const atualizarProdutos = async (id) => {
    const produto = {
      imagem: "a",
      nome: "a",
      classi: "a",
      review: "a",
      precoIni: "a",
      precoFin: "a",
      marca: "a",
      cor: "a",
      categoria: "a",
    };
    try {
      const { data } = await axios.put(`${url}/${id}`, produto);
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
            <Botao texto="Cadastrar" acao={handleItemPress} />
          </View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
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
  scrollV: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  btn: {
    alignItems: "center",
  },
});

export default Home;
