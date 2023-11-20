import React, { useState, useNavigation, useEffect } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { ref, update } from "firebase/database";
import db from "../../firebaseConnection";

export default function Update() {
  const navigation = useNavigation();
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [task, setTask] = useState("");

  function updateTask(taskKey) {
    const taskRef = ref(db, `/tarefas/${userKey}`);
    update(taskRef, {
      nome: taskName,
      deadline: deadline,
    });
    navigation.navigate("Home");
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
      <Text style={"color: #000"}>Udating task: </Text>
      <Text style={"color: #000"}>Update Task name</Text>
      <TextInput
        placeholder="Insert the new name"
        onChange={(texto) => setTaskName(texto)}
      />
      <Text style={"color: #000"}>Update Deadline</Text>
      <TextInput
        placeholder="Insert the new deadline"
        onChange={(texto) => setDeadline(texto)}
      />
      <Button onPress={updateTask(taskKey)}>Submit</Button>
    </View>
  );
}
