import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../services/firebaseConnection";
import {
  Container,
  AreaInput,
  Input,
  ButtonText,
  Title,
  SubmitButton,
  Header,
  HeadText,
  GoBackButton,
  GoBackText,
} from "./styles";

export default function SignUp() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {
    const auth = getAuth(app); // Get the Auth object from your Firebase connection

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      alert("User created: " + user.email);
    } catch (error) {
      if (error.code === "auth/weak-password") {
        alert("Your password must have more than 6 characters");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid e-mail");
      } else {
        alert("Whoops, something went worng " + error.message);
      }
    }

    setEmail("");
    setPassword("");
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <HeadText>Create your account!</HeadText>
      </Header>
      <AreaInput>
        <Title>E-mail</Title>
        <Input
          placeholder="Insert your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </AreaInput>

      <AreaInput>
        <Title>Password</Title>
        <Input
          placeholder="Insert your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </AreaInput>

      <SubmitButton onPress={signup}>
        <ButtonText>Signup</ButtonText>
      </SubmitButton>
      <GoBackButton onPress={() => navigation.goBack()}>
        <GoBackText>Return</GoBackText>
      </GoBackButton>
    </Container>
  );
}
