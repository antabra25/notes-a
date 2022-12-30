import { View, StyleSheet, Text } from "react-native-web";

const TaskItem = ({ task }) => {
  return (
    <View style={style.taskContainer}>
      <Text style={style.taskText}>{task}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  taskContainer: {},
  taskText: {},
});

export default TaskItem;
