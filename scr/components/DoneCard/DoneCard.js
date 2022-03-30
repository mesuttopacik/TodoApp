import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DoneCard.style';

import IconCard from '../IconCard';

const DoneCard = ({DoneTodos, remove}) => {
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
      <IconCard name="times-circle-o" />
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
