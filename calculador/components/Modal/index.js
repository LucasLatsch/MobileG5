import { View, Text } from "react-native";
import React from "react";

export default function Modal() {
  const [exibirModal, setExibirModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>
      <TouchableOpacity
        style={styles.buttton}
        onPress={() => setExibirModal(true)}
      >
        <Text style={styles.title}>Abrir</Text>
      </TouchableOpacity>
      <Modal visible={exibirModal} transparent={true}>
        <ActionModal />
        {/* <Text style={{ color: "#000" }}>Exemplo Modal</Text> */}
      </Modal>
    </View>
  );
}
