import React, { useState, useContext } from "react";
import { Platform } from "react-native";

import {
  Container,
  AreaInput,
  Input,
  ButtonText,
  Title,
  SubmitButton,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  // const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
      <AreaInput>
        <Title>E-mail</Title>
        <Input
          placeholder="Insert your e-mail"
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
      </AreaInput>

      <AreaInput>
        <Title>Password</Title>
        <Input
          placeholder="Insert your password"
          value={password}
          onChangeText={(text) => setPassword(text.toLowerCase())}
          secureTextEntry={true}
        />
      </AreaInput>

      <AreaInput>
        <SubmitButton onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </SubmitButton>

        {/* 
            <Link onPress={() => navigation.navigate("SignUp")}>
              <LinkText>Criar nova conta</LinkText>
            </Link> */}
      </AreaInput>
    </Container>
  );
}
