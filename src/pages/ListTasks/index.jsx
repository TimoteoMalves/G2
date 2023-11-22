import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, RefreshControl } from "react-native";
import TaskList from "../../components/List";
import { db } from "../../services/firebaseConnection";
import { ref, onValue } from "firebase/database";
import {
  Container,
  HeaderText,
  HeaderArea,
  HeaderButton,
  List,
  HeaderButtonText,
  ListArea,
} from "./styles";

export default function ListTasks() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [tasks, setTasks] = useState();
  const loadTasks = async () => {
    try {
      onValue(ref(db, "/tasks"), (querySnapShot) => {
        const task = querySnapShot.val() || {};
        setTasks(task);
        setRefreshing(false);
      });
    } catch (error) {
      Alert.alert("erro");
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setDataSource([]);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <Container>
      <HeaderArea>
        <HeaderText>Tasks</HeaderText>
        <HeaderButton onPress={() => navigation.navigate("CreateTask")}>
          <HeaderButtonText>Create task</HeaderButtonText>
        </HeaderButton>
      </HeaderArea>
      <ListArea>
        {tasks && (
          <List
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            data={Object.keys(tasks)}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <TaskList data={tasks[item]} id={item} />}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </ListArea>
    </Container>
  );
}
