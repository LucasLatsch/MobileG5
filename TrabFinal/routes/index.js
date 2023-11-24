import { React } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Sobre from "../pages/Sobre";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SplashScreen from "../pages/Splash";
import Cadastro from "../pages/Cadastro";
import { MaterialIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <Drawer.Navigator initialRouteName="Animação">
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="login" size={size} color={color} />
          ),
          drawerActiveTintColor: "#FF5722",
        }}
      />
      <Drawer.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person-add" size={size} color={color} />
          ),
          drawerActiveTintColor: "#FF5722",
        }}
      />
      <Drawer.Screen
        name="Pagina inicial"
        component={Home}
        options={{
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          drawerActiveTintColor: "#FF5722",
        }}
      />
      <Drawer.Screen
        name="Integrantes"
        component={Sobre}
        options={{
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="people-alt" size={size} color={color} />
          ),
          drawerActiveTintColor: "#FF5722",
        }}
      />
      <Drawer.Screen
        name="Animação"
        component={SplashScreen}
        options={{
          headerShown: false,
          drawerLabel: () => null,
        }}
      />
    </Drawer.Navigator>
  );
}
