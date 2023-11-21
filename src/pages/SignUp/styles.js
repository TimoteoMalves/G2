import styled from "styled-components/native";
import { Text } from "react-native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  align-items: center;
  bottom: 120px;
  justify-content: center;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const HeadText = styled.Text`
  font-size: 30px;
  color: #000;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 70%;
  height: 45px;
  border-radius: 8px;
  background-color: #ffff;
  border: 1px solid #000;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  color: #000;
  font-size: 1px;
  margin: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #0000ff;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 60px;
  height: 15px;
  display: flex;
  margin: 10px;
  border: 1px solid #000;
  border-radius: 2px;
  align-items: center;
`;

export const GoBackText = styled.Text`
  font-size: 10px;
  color: #000;
`;
