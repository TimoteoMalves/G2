import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { db, app } from "../../firebaseConnection";
import {
  Container,
  AreaInput,
  Input,
  SubmitButton,
  Title,
  ButtonText,
} from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [signed, setSigned] = useState(false);
  const auth = getAuth(app);

  async function logar() {
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Bem-vindo: " + value.user.email);
        setUser(value.user.email);
        setSigned(true);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }
  function createTask() {
    push(ref(db, "/tarefas"), {
      nome: taskName,
      deadline: deadline,
    });
    return "Created With";
  }

  return signed ? (
    <Container>
      <Title>Task name</Title>
      <Input
        placeholder="Insert the task's name"
        onChange={(texto) => setTaskName(texto)}
      />
      <Title>Deadline</Title>
      <Input
        placeholder="Insert the task's deadline"
        onChange={(texto) => setDeadline(texto)}
      />
      <SubmitButton onPress={createTask}>Send task</SubmitButton>
      {/* <Button onPress={() => navigation.navigate("Update")}>
        Go to update
      </Button>
      <Button onPress={() => navigation.navigate("Remove")}>
        Go to remove
      </Button> */}
    </Container>
  ) : (
    <Container>
      <Title>Email</Title>
      <AreaInput>
        <Input
          placeholder="Insert your email"
          onChange={(texto) => setEmail(texto)}
        />
      </AreaInput>
      <Title>Password</Title>
      <AreaInput>
        <Input
          placeholder="Insert your password"
          onChange={(texto) => setPassword(texto)}
        />
      </AreaInput>
      <SubmitButton onPress={logar} title="Logar">
        <ButtonText>Login</ButtonText>
      </SubmitButton>
    </Container>
  );
}
