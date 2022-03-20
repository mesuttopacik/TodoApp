import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Styles from './ShowDoneToDos.style';

import {useSelector, useDispatch} from 'react-redux';
import DoneCard from '../../DoneCard';

const ShowDoneToDos = () => {
  const doneList = useSelector(selector => selector.doneList);
  const dispatch = useDispatch()
  const onRemoveDoneTaskHandler = (e) =>{
    dispatch({type: 'REMOVE_DONE_TASK', payload: {index:e}})
  }
  return (
    <View style={Styles.container}>
      <DoneCard DoneTodos={doneList} remove={onRemoveDoneTaskHandler} />
    </View>
  );
};

export default ShowDoneToDos;
