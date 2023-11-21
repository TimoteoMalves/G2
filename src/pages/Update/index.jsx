import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");
  const [task, setTask] = useState("");

  return (
    <Container>
      <HeaderArea>
        <HeaderText>Edit Task</HeaderText>
      </HeaderArea>
      <ContentArea>
        <AreaInput>
          <Input
            placeholder="Insert new name"
            onChangeText={(text) => setTaskName(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Insert new deadline"
            onChangeText={(text) => setDeadline(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Insert new status"
            onChangeText={(text) => setStatus(text)}
          />
        </AreaInput>
      </ContentArea>
      <SubmitButton>
        <ButtonText>Submit changes</ButtonText>
      </SubmitButton>
    </Container>
  );
}
