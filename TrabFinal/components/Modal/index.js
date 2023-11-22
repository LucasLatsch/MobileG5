import { React, useState } from "react";
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
  result,
}) => {
  // console.log("Props recebidas na modal:", { nome, marca, cor, preco, imagem });
  const [imagem, setImagem] = useState(result.imagem ? result.imagem : "");
  const [nome, setNome] = useState(result.nome ? result.nome : "");
  const [marca, setMarca] = useState(result.marca ? result.marca : "");
  const [cor, setCor] = useState(result.cor ? result.cor : "");
  const [classi, setClassi] = useState(result.classi ? result.classi : "");
  const [review, setReview] = useState(result.review ? result.review : "");
  const [precoIni, setPrecoIni] = useState(
    result.precoIni ? result.precoIni : ""
  );
  const [precoFin, setPrecoFin] = useState(
    result.precoFin ? result.precoFin : ""
  );

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
              placeholder="Digite o URL do produto"
              onChangeText={(imagem) => setImagem(imagem)}
            />
          </View>
          <View style={styles.containertext}>
            <Text>Nome do Produto</Text>
            <TextInput
              style={styles.input}
              value={nome}
              placeholder="Digite o nome do produto"
              onChangeText={(nome) => setNome(nome)}
            />
          </View>
          <View style={styles.containertext}>
            <Text>Marca do Produto</Text>
            <TextInput
              style={styles.input}
              value={marca}
              placeholder="Digite a marca do produto"
              onChangeText={(marca) => setMarca(marca)}
            />
          </View>
          <View style={styles.containertext}>
            <Text>Cor do Produto</Text>
            <TextInput
              style={styles.input}
              value={cor}
              placeholder="Digite a cor do produto"
              onChangeText={(cor) => setCor(cor)}
            />
          </View>
          <View style={styles.containertext}>
            <Text>Classificação do Produto</Text>
            <TextInput
              style={styles.input}
              value={classi}
              placeholder="Digite a classificaçao do produto"
              onChangeText={(classi) => setClassi(classi)}
            />
          </View>
          <View style={styles.containertext}>
            <Text>Review do Produto</Text>
            <TextInput
              style={styles.input}
              value={review}
              placeholder="Review do produto"
              onChangeText={(review) => setReview(review)}
            />
          </View>
          <View style={styles.containertext}>
            <Text>Preço do Produto</Text>
            <TextInput
              style={styles.input}
              value={precoIni}
              placeholder="Digite o preço do produto"
              onChangeText={(precoIni) => setPrecoIni(precoIni)}
            />
          </View>
          <View style={styles.containertext}>
            <Text>Preço do Produto com desconto</Text>
            <TextInput
              style={styles.input}
              value={precoFin}
              placeholder="Digite o preço do produto com desconto"
              onChangeText={(precoFin) => setPrecoFin(precoFin)}
            />
          </View>
          <View style={styles.containerbtn}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                handleSalvar(result.id, {
                  imagem,
                  nome,
                  marca,
                  cor,
                  classi,
                  review,
                  precoIni,
                  precoFin,
                })
              }
            >
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
