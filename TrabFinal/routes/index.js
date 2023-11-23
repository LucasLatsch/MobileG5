import { React } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Sobre from "../pages/Sobre";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SplashScreen from "../pages/Splash";

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Animação" component={SplashScreen} />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{ headerShown: true }}
      />
      <Drawer.Screen name="Pagina inicial" component={Home} />
      <Drawer.Screen name="Integrantes" component={Sobre} />
    </Drawer.Navigator>
  );
}
