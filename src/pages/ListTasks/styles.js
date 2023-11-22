import styled from "styled-components/native";
import { Text } from "react-native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeaderArea = styled.View`
  height: 20%;
  width: 110%;
  background-color: #68b2f8;
  align-items: center;
  justify-content: top;
`;

export const HeaderText = styled(Text)`
  vertical-align: top;
  top: 35%;
  font-size: 35px;
  color: #000;
`;
export const HeaderButton = styled.TouchableOpacity`
  border: 1px solid #0000ff;
  top: 45%;
  font-size: 25px;
  align-items: center;
  border-radius: 2%;
  width: 30%;
`;

export const HeaderButtonText = styled(Text)`
  color: #000;
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

export const List = styled.FlatList`
  top: 5%;
  width: 90%;
  height: 20%;
  flex: 1;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #0000ff;
`;
