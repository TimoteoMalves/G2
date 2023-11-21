import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import TaskList from "../../components/List";
import { db } from "../../services/firebaseConnection";
import { ref, onValue } from "firebase/database";
import {
  Container,
  HeaderText,
  HeaderArea,
  SubmitButton,
  ButtonText,
  HeaderButton,
  List,
  HeaderButtonText,
} from "./styles";

export default function ListTasks() {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState("");
  const [loading, setLoading] = useState("");

  const loadTasks = async () => {
    try {
      onValue(ref(db, "/tasks"), (querySnapShot) => {
        const tasksFormat = [];
        querySnapShot.forEach((child) => {
          tasksFormat.push({
            id: child.key,
            ...child.val(),
          });
        });
        setTasks(tasksFormat);
        setLoading(false);
        console.log(tasksFormat);
      });
    } catch (error) {
      console.log("erro");
    } finally {
      setLoading(false);
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

      <List
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskList data={item} />}
      />
    </Container>
  );
}
