import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ToDoCard.style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';



const ToDoCard = ({todos, onDeltask}) => {
  const circle = <Icon name="circle-o" size={25} color="#eeee" />;
  listItemHandler = ({item, index}) => (
    <TouchableOpacity onPress={() => onDeltask(index)} style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.taskText}>
          <Text style={styles.innerText}>{index + 1} - </Text>
          <Text style={styles.innerText}>{item}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        {circle}
      </View>
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
