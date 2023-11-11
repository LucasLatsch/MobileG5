import Header from "./components/Header";
import { StyleSheet, Text, View } from "react-native";
import Main from "./components/Main";
export default function IMC() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
