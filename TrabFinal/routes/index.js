import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Sobre from "../pages/Sobre";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
}
