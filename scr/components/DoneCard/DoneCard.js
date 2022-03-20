import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DoneCard.style';

import Icon from 'react-native-vector-icons/dist/FontAwesome';


const DoneCard = ({DoneTodos, remove}) => {
  const checked = <Icon name="times-circle-o" size={25} color="#eeee" />;
  listItemHandler = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        remove(index);
      }}
      style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.taskText}>
          <Text style={styles.innerText}>{index + 1} - </Text>
          <Text style={styles.innerText}>{item}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
      {checked}
      </View>
      
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={DoneTodos}
        renderItem={listItemHandler}
        keyExtractor={DoneTodos.index}
      />
    </View>
  );
};

export default DoneCard;
