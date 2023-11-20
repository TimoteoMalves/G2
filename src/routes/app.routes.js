import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Update from "../pages/Update";

const AppStack = createNativeStackNavigator();
export default function AppRoutes() {
  return (
    <AppStack.Navigator>
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
