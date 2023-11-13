import Header from "./components/Header";
import { StyleSheet, Text, View } from "react-native";
import Main from "./components/Main";
export default function IMC() {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View>
        <Main />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
