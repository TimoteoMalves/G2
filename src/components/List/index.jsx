import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { ref, remove } from "firebase/database";
import { db } from "../../services/firebaseConnection";
import {
  Card,
  Title,
  Text,
  Status,
  RemoveButton,
  ButtonContainer,
  EditButton,
  SwitchContainer,
  SwitchButton,
} from "./styles";

export default function TaskList({ data, id }) {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);

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

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <Card>
      <Title>Name: {data.name}</Title>
      <Title>
        Deadline: <Text>{data.deadline}</Text>
      </Title>
      <ButtonContainer>
        <RemoveButton title="🗑 Remove" onPress={() => removeTask(id)} />
      </ButtonContainer>
      <ButtonContainer>
        <EditButton
          title="🖊 Edit"
          onPress={() => navigation.navigate("Update", { task: data, id })}
        />
      </ButtonContainer>
      <SwitchContainer
        style={{
          backgroundColor: isEnabled ? "#c6e5b1" : "#ffbfb0",
        }}
      >
        <SwitchButton
          trackColor="#767577"
          thumbColor="#f4f3f4"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </SwitchContainer>
    </Card>
  );
}
