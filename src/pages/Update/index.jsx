import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import { ref, update } from "firebase/database";
import { db } from "../../services/firebaseConnection";

import {
  Container,
  AreaInput,
  Input,
  ButtonText,
  Title,
  SubmitButton,
  ContentArea,
  HeaderArea,
  HeaderText,
} from "./styles";

export default function Update() {
  const navigation = useNavigation();
  const route = useRoute();
  const tasks = route.params.task;
  const id = route.params.id;

  const [taskName, setTaskName] = useState();
  const [deadline, setDeadline] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus(tasks.status);
    setDeadline(tasks.deadline);
    setTaskName(tasks.name);
  }, []);

  function updateTask(id) {
    const newData = { taskName, deadline, status };
    const taskRef = ref(db, `/tasks/${id}`);
    try {
      update(taskRef, newData).then(() => {
        Alert.alert("Task updated successfully.");
      });
    } catch (error) {
      Alert.alert("Erro ao criar: ", error.message);
    } finally {
      navigation.goBack();
    }
  }

  return (
    <Container>
      <HeaderArea>
        <HeaderText>Edit Task</HeaderText>
      </HeaderArea>
      <ContentArea>
        <AreaInput>
          <Input
            value={taskName}
            placeholder="Insert new name"
            onChangeText={(text) => setTaskName(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            value={deadline}
            placeholder="Insert new deadline"
            onChangeText={(text) => setDeadline(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            value={status}
            placeholder="Insert new status"
            onChangeText={(text) => setStatus(text)}
          />
        </AreaInput>
      </ContentArea>
      <SubmitButton onPress={() => updateTask(id)}>
        <ButtonText>Submit changes</ButtonText>
      </SubmitButton>
    </Container>
  );
}
