import React, { useState, useNavigation, useEffect } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { ref, remove } from "firebase/database";
import db from "../../firebaseConnection";

export default function Remove() {
  const navigation = useNavigation();
  const [task, setTask] = useState("");
  const [key, setKey] = useState("");

  function clearTask(taskKey) {
    const taskRef = ref(db, `/tarefas/${taskKey}`);
    remove(taskRef)
      .then(() => {
        console.log(`Task ${taskKey} removed.`);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.error(`Erro ao remover o usuário: ${error}`);
      });
  }

  const fetchTasks = async () => {
    try {
      onValue(ref(db, "/tarefas"), (querySnapShot) => {
        const taskData = querySnapShot.val() || {};
        setTask(taskData);
        console.log(taskData);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }),
    [];

  return (
    <View>
      <Text>Removing task</Text>
      <Text>Type task's key</Text>
      <TextInput onChange={(texto) => setKey(texto)}></TextInput>
      <Button onPress={clearTask(key)}>Submit</Button>
    </View>
  );
}
