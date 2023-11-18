import { SafeAreaView, TextInput, StyleSheet, Text } from "react-native";

const MeuInput = (props) => {
  return (
    <SafeAreaView>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        style={style.input}
        placeholder={props.placeholder}
        secureTextEntry={props.comMascara}
        onChangeText={(valor) => props.setValor(valor)}
      ></TextInput>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 15,
    marginTop: 3,
    padding: 10,
    width: "100%",
    fontSize: 18,
    color: "#1a1a1a",
    borderRadius: 4,
  },
  label: {
    fontSize: 18,
  },
});

export default MeuInput;
