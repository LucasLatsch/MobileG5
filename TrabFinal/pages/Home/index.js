import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Modal,
  FlatList,
  View,
  Dimensions,
} from "react-native";
import axios from "axios";
import ModalComponent from "../../components/Modal";
import Botao from "../../components/Botao";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";

const url = "https://65495a57dd8ebcd4ab2483d2.mockapi.io/login";
const Home = () => {
  const [exibirModal, setExibirModal] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [produto, setProduto] = useState([]);
  const [cadastro, setCadastro] = useState(true);
  const [query, setQuery] = useState("");
  const [resultadosPesquisa, setResultadosPesquisa] = useState([]);
  const width = Dimensions.get("window").width;

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
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.email}>{item.marca}</Text>
            <Text style={styles.email}>{item.cor}</Text>
            {defineStar(item.classi)}
            <Text style={styles.email}>({item.review}) Views</Text>
            <Text style={styles.email1}>R${item.precoIni}</Text>
            <Text style={styles.preco}>R${item.precoFin}</Text>
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
      console.log("item deletado:" + id);
      console.log(data);
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
    setItemSelecionado("");
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

  const handleInputChange = (text) => {
    setQuery(text);

    const resultados = produto.filter(
      (item) =>
        item.nome.toLowerCase().includes(text.toLowerCase()) ||
        item.marca.toLowerCase().includes(text.toLowerCase()) ||
        item.cor.toLowerCase().includes(text.toLowerCase())
    );
    setResultadosPesquisa(resultados);
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
        <View style={{ backgroundColor: "#fff" }}>
          <Carousel
            loop
            width={width}
            height={250}
            autoPlay={true}
            data={produto}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Image style={styles.imgC} source={item.imagem} />
              </View>
            )}
          />
        </View>
        <View style={styles.containerMain}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              padding: 8,
              paddingTop: 20,
            }}
          >
            <View style={styles.search}>
              <TextInput
                placeholder="Barra de Pesquisa..."
                onChangeText={handleInputChange}
                style={styles.input}
                value={query}
              />
              <Ionicons
                name="search"
                size={30}
                color="#888"
                style={{ marginRight: 0, marginTop: 5 }}
              />
            </View>
            <View style={styles.btn}>
              <Botao texto="Cadastrar" acao={handlePress} largura={150} />
            </View>
          </View>
          <FlatList
            data={query.length > 0 ? resultadosPesquisa : produto}
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
    backgroundColor: "#ffffff",
  },
  containerMain: {
    backgroundColor: "#000000",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  star: {
    flexDirection: "row",
  },
  item: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 15,
    shadowColor: "#fff",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  img: {
    borderRadius: 25,
    width: 120,
    height: 120,
  },
  imgC: {
    borderRadius: 25,
    width: "width",
    height: 250,
  },
  email: {
    fontSize: 10,
  },
  preco: {
    fontSize: 15,
    color: "green",
  },
  nome: {
    fontSize: 10,
    fontWeight: "700",
    flex: 1,
  },
  email1: {
    fontSize: 10,
    textDecorationLine: "line-through",
    color: "red",
  },
  scrollV: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  btn: {
    alignItems: "center",
  },
  input: {
    backgroundColor: "#F3F3F3",
    padding: 8,
    width: 160,
    borderRadius: 4,
    marginTop: 5,
  },
  search: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
});

export default Home;
