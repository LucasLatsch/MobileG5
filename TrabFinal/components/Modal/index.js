import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

const ModalComponent = ({
  handleClose,
  handleSalvar,
  handleDeletar,
  nome,
  marca,
  cor,
  preco,
  imagem,
  result,
}) => {
  // console.log("Props recebidas na modal:", { nome, marca, cor, preco, imagem });

  const renderizarImagem = () => {
    // Verifica se a URL da imagem está presente
    if (imagem) {
      return <Image source={imagem} style={styles.imageSV} />;
    } else {
      return (
        <View style={styles.placeholder}>
          <Text>Imagem não disponível</Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.containerModal}>
      <ScrollView vertical style={styles.scrollV}>
        <View style={styles.container}>
          <View style={styles.cMView}>{renderizarImagem()}</View>
          <View style={styles.containertext}>
            <Text>Url do Produto</Text>
            <TextInput
              style={styles.input}
              value={imagem}
              placeholder="Digite o nome do produto"
              onChangeText={(imagem) => setValor(imagem)}
            />
          </View>
          <View style={styles.containertext}>
            <Text>Nome do Produto</Text>
            <TextInput
              style={styles.input}
              value={nome}
              placeholder="Digite o nome do produto"
              onChangeText={(nome) => setValor(nome)}
            />
          </View>
          <View style={styles.containertext}>
            <Text>Marca do Produto</Text>
            <TextInput
              style={styles.input}
              value={marca}
              placeholder="Digite o nome do produto"
              onChangeText={(marca) => setValor(marca)}
            />
          </View>
          <View style={styles.containertext}>
            <Text>Cor do Produto</Text>
            <TextInput
              style={styles.input}
              value={cor}
              placeholder="Digite o nome do produto"
              onChangeText={(cor) => setValor(cor)}
            />
          </View>
          <View style={styles.containertext}>
            <Text>Preço do Produto</Text>
            <TextInput
              style={styles.input}
              value={preco}
              placeholder="Digite o nome do produto"
              onChangeText={(preco) => setValor(preco)}
            />
          </View>
          <View style={styles.containerbtn}>
            <TouchableOpacity style={styles.btn} onPress={handleSalvar}>
              <Text style={styles.textobtn}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleDeletar(result.id)}
            >
              <Text style={styles.textobtn}>Deletar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleClose}>
              <Text style={styles.textobtn}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgb(255, 255, 255)",
  },
  placeholder: {
    height: 150,
    width: 300,
    borderRadius: 43,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  containertext: {
    alignItems: "flex-start",
  },
  container: {
    alignItems: "center",
  },
  containerbtn: {
    gap: 10,
  },
  btn: {
    width: 250,
    backgroundColor: "#FF5722",
    height: 45,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  textobtn: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  cMView: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textoModal: {
    paddingTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  imageSV: {
    height: 200,
    width: 300,
    borderRadius: 43,
    marginTop: 10,
    padding: 10,
  },
  scrollV: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    marginTop: 3,
    padding: 10,
    width: 250,
    fontSize: 18,
    color: "#1a1a1a",
    borderRadius: 4,
  },
});

export default ModalComponent;
