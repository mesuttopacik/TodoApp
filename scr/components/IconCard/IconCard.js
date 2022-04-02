import { View, Text } from 'react-native'
import React from 'react'
import  styles from './IconCard.style'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const IconCard = ({name}) => {
const circle = <Icon testID = 'list-icon-name' name={name} size={styles.size} color={styles.color} />;
  return (
    <View style={styles.container}>
    {circle}
  </View>
  )
}

export default IconCard