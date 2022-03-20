import React, {useState} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import styles from './AddToDo.style';
import ToDoCard from '../../ToDoCard';
import {useDispatch} from 'react-redux';

const AddToDo = () => {
  const [task, setTask] = useState();
  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();
  handleSetDoneList = doneTask => {
    dispatch({type: 'DONE_TASK', payload: {toDo: doneTask}});
  };
  const toDoHandler = () => {
    setTodos([...todos, task]);
    setTask('');
  };

  onDeltask = index => {
    let todosCopy = [...todos];
    let doneTask = todosCopy.splice(index, 1);
    handleSetDoneList(doneTask[0]);
    setTodos(todosCopy);
  };
  return (
    <View 
    enabled
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
      <ToDoCard todos={todos} onDeltask={onDeltask} />
      <View
        style={styles.addToDoWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setTask(text)}
          value={task}
          />
        <TouchableOpacity onPress={toDoHandler}>
          <View style={styles.addButtonWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddToDo;
