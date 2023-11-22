import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import TaskList from "../../components/List";
import { db } from "../../services/firebaseConnection";
import { ref, onValue } from "firebase/database";
import {
  Container,
  HeaderText,
  HeaderArea,
  HeaderButton,
  List,
  HeaderButtonText,
} from "./styles";

export default function ListTasks() {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState();
  const loadTasks = async () => {
    try {
      onValue(ref(db, "/tasks"), (querySnapShot) => {
        const task = querySnapShot.val() || {};
        setTasks(task);
      });
    } catch (error) {
      Alert.alert("erro");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <Container>
      <HeaderArea>
        <HeaderText>Tasks</HeaderText>
        <HeaderButton onPress={() => navigation.navigate("CreateTask")}>
          <HeaderButtonText>Create task</HeaderButtonText>
        </HeaderButton>
      </HeaderArea>

      {tasks && (
        <List
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          data={Object.keys(tasks)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <TaskList data={tasks[item]} id={item} />}
        />
      )}
    </Container>
  );
}
