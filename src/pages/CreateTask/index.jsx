import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { ref, push } from "firebase/database";
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

export default function CreateTask() {
  const navigation = useNavigation();
  const [deadline, setDeadline] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  function onSubmitCreate() {
    const newData = { name, deadline, status };
    try {
      push(ref(db, "/tasks"), newData).then(() => {
        setName("");
        setStatus("");
        setDeadline("");
        navigation.navigate("ListTasks");
      });
    } catch (error) {
      Alert.alert("Erro ao criar: ", error.message);
    }
  }

  return (
    <Container>
      <HeaderArea>
        <HeaderText>Creating New Task</HeaderText>
      </HeaderArea>
      <ContentArea>
        <AreaInput>
          <Input
            placeholder="Insert the task's name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </AreaInput>
        <Title>Deadline</Title>
        <AreaInput>
          <Input
            placeholder="Insert the task's deadline"
            value={deadline}
            onChangeText={(text) => setDeadline(text)}
          />
        </AreaInput>
        <Title>Status</Title>
        <AreaInput>
          <Input
            placeholder="Insert the task's status"
            value={status}
            onChangeText={(text) => setStatus(text)}
          />
        </AreaInput>
      </ContentArea>
      <SubmitButton onPress={onSubmitCreate}>
        <ButtonText>Create</ButtonText>
      </SubmitButton>
    </Container>
  );
}
