import React, {useState} from 'react';
import {Text, Platform, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './AddToDo.style';
import ToDoCard from '../../ToDoCard';
import {useDispatch} from 'react-redux';
import Addbutton from '../../AddButton';

const AddToDo = () => {
  const [task, setTask] = useState();
  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();
  handleSetDoneList = doneTask => {
    dispatch({type: 'DONE_TASK', payload: {toDo: doneTask}});
  };
  const toDoHandler = () => {
    if (!task) {
      return;
    }
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
      <View style={styles.addToDoWrapper}>
        <TextInput
        testID='todo-input'
        placeholder='Add..'
          style={styles.textInput}
          onChangeText={text => setTask(text)}
          value={task}
        />
        <Addbutton onClick={toDoHandler} />
      </View>
    </View>
  );
};

export default AddToDo;
