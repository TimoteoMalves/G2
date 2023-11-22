import styled from "styled-components/native";

export const Card = styled.View`
  width: 88%;
  height: 220px;
  border-radius: 12px;
  align-items: center;
  border: 1px solid #000;
  margin: 22px;
  padding: 12px;
`;

export const Title = styled.Text`
  text-align: left;
  font-size: 20px;
  margin-top: 5px;
  font-weight: bold;
`;

export const Text = styled.Text`
  text-align: left;
  font-size: 20px;
  margin: 7px;
`;

export const Status = styled.Text`
  text-align: left;
  font-size: 15px;
  margin-left: 7px;
`;

export const ButtonContainer = styled.View`
  top: 10px;
`;

export const RemoveButton = styled.Button`
  margin: 5px;
`;

export const EditButton = styled.Button`
  margin: 5px;
`;

export const SwitchContainer = styled.View`
  direction: row;
  align-items: center;
  padding: 2px;
  border: 1px solid #000;
  border-radius: 22px;
  margin: 15px;
  width: 90%;
  height: 39px;
`;

export const SwitchButton = styled.Switch`
  width: 60px;
  height: 32px;
  border-radius: 32px;
`;
