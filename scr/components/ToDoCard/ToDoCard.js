import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ToDoCard.style';
import IconCard from '../IconCard';



const ToDoCard = ({todos, onDeltask}) => {
  listItemHandler = ({item, index}) => (
    <TouchableOpacity onPress={() => onDeltask(index)} style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.taskText}>
          <Text style={styles.innerText}>{index + 1} - </Text>
          <Text style={styles.innerText}>{item}</Text>
        </View>
      </View>
      <IconCard name="circle-o" />
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={todos}
        renderItem={listItemHandler}
        keyExtractor={todos.index}
      />
    </View>
  );
};

export default ToDoCard;
