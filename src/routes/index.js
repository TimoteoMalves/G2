import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Update from "../pages/Update";

const AppStack = createNativeStackNavigator();
export default function Routes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="Update"
        component={Update}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}
