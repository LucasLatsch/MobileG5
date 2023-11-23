import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { useNavigation } from "@react-navigation/native";
import animationData from "../../assets/Animation_-_1700331134011.json"; // Importe o arquivo JSON da animação
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
        loop: false,
        autoplay: true,
        animationData: animationData, // Use o arquivo JSON importado como animationData
      });

      anim.addEventListener("complete", () => {
        // Navega para outra tela após a conclusão da animação
        navigation.navigate("Login"); // Substitua 'OutraTela' pelo nome da tela de destino
      });
    }
  }, [navigation]);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        ref={containerRef}
        style={{
          width: "400px",
          height: "400px",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </View>
  );
};

export default LottieAnimation;
