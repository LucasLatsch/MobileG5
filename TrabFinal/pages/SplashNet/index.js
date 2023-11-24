import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { useNavigation } from "@react-navigation/native";
import animationData from "../../assets/Animation - 1700778492826.json"; // Importe o arquivo JSON da animação
import { View } from "react-native";
const LottieAnimation = () => {
  const containerRef = useRef(null);
  const navigation = useNavigation();

  //! Arquivo de animação para web

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      anim.addEventListener("complete", () => {
        // Navega para outra tela após a conclusão da animação
        navigation.navigate("Login");
      });
    }
  }, [navigation]);

  return (
    <View
      style={{
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <View
        ref={containerRef}
        style={{
          width: "600px",
          height: "600px",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </View>
  );
};

export default LottieAnimation;
