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
  bottom: 15%;
  background-color: #68b2f8;
  align-items: center;
`;

export const HeaderText = styled(Text)`
  vertical-align: top;
  top: 50%;
  font-size: 35px;
  color: #000;
`;

export const ContentArea = styled.View`
  flex-direction: column;
  height: 50%;
  bottom: 20%;
  align-items: center;
  justify-content: center;
`;

export const AreaInput = styled.View`
  flex-direction: row;
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
  bottom: 20%;
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
