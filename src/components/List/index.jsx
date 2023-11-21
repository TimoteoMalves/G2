import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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

export default function TaskList({ data }) {
  const navigation = useNavigation();

  function removeTask(data) {
    const taskRef = ref(db, `/tasks/${data.id}`);
    remove(taskRef)
      .then(() => {
        console.log(`Task removed successfully.`);
      })
      .catch((error) => {
        console.error(`Error trying to remove a task ${error}`);
      });
  }

  return (
    <Card>
      <Title>{data.name}</Title>
      <Deadline>{data.deadline}</Deadline>
      <ButtonContainer>
        <RemoveButton title="🗑 Remove" onPress={removeTask} />
      </ButtonContainer>
      <ButtonContainer>
        <EditButton
          title="🖊 Edit"
          onPress={() => navigation.navigate("Update")}
        />
      </ButtonContainer>
    </Card>
  );
}
