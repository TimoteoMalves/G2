import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Update from "../pages/Update";
import CreateTask from "../pages/CreateTask";
import ListTasks from "../pages/ListTasks";

const AppStack = createNativeStackNavigator();
export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="ListTasks"
        component={ListTasks}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="CreateTask"
        component={CreateTask}
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
