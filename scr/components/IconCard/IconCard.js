import { View, Text } from 'react-native'
import React from 'react'
import  styles from './IconCard.style'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const iconCard = ({name}) => {
const circle = <Icon name={name} size={styles.size} color={styles.color} />;
  return (
    <View style={styles.container}>
    {circle}
  </View>
  )
}

export default iconCard