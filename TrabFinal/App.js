import { StyleSheet, View, Text } from "react-native";
import Rota from "./routes/index";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import SplashScreen from "./pages/SplashNet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe(); // Cancela a inscrição do evento ao desmontar o componente
    };
  }, []);

  return (
    <NavigationContainer>
      {isConnected ? (
        <Rota />
      ) : (
        <View style={styles.container}>
          <SplashScreen />
          <Text style={styles.text}>No Internet Connection...</Text>
          <Icon name="web-off" size={50} />
        </View>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    bottom: 100,
  },
  text: {
    fontSize: 30,
  },
});
