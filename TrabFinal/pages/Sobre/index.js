import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Sobre() {
  const [userData, setUserData] = useState([]);

  const Item = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => handleEmailPress(item.login)}>
        <Image style={styles.img} source={{ uri: item.avatar_url }} />
      </TouchableOpacity>
      <View>
        <Text style={styles.nome}>{item.login}</Text>
      </View>
    </View>
  );

  const handleEmailPress = (email) => {
    const url = `https://github.com/${email}`;
    Linking.openURL(url);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const owner = "LucasLatsch";
        const repoName = "MobileG5";
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repoName}/contributors`
        );
        const data = response.data;
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getData();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={userData}
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
