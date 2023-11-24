import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Button } from "react-native";
import LottieView from "lottie-react-native";

export default function SplashScreen() {
  const animation = useRef(null);
  useEffect(() => {}, []);

  //! Arquivo de animação para celular

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={require("../../assets/Animation - 1700778375765.json")}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Restart Animation"
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
