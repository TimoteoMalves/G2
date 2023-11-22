import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { ref, remove } from "firebase/database";
import { db } from "../../services/firebaseConnection";
import {
  Card,
  Title,
  Deadline,
  Status,
  RemoveButton,
  ButtonContainer,
  EditButton,
} from "./styles";

export default function TaskList({ data, id }) {
  const navigation = useNavigation();

  function removeTask(id) {
    const taskRef = ref(db, `/tasks/${id}`);
    remove(taskRef)
      .then(() => {
        Alert.alert("Removed successfully.");
      })
      .catch((error) => {
        Alert.alert(`Error trying to remove a task ${error}`);
      });
  }
  return (
    <Card>
      <Title>{data.name}</Title>
      <Deadline>{data.deadline}</Deadline>
      <Deadline style={{ color: data.status === "ativo" ? "#008000" : "#f00" }}>
        {data.status}
      </Deadline>
      <ButtonContainer>
        <RemoveButton title="🗑 Remove" onPress={() => removeTask(id)} />
      </ButtonContainer>
      <ButtonContainer>
        <EditButton
          title="🖊 Edit"
          onPress={() => navigation.navigate("Update", { task: data, id })}
        />
      </ButtonContainer>
    </Card>
  );
}
