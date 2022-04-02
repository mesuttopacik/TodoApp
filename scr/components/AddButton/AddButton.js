import { View, Text, TouchableOpacity } from 'react-native'
import styles from './AddButton.style'
import React from 'react'

const Addbutton = ({onClick}) => {
  return (
    <TouchableOpacity testID='button-toucable' onPress={onClick}>
    <View style={styles.addButtonWrapper}>
      <Text style={styles.addText}>+</Text>
    </View>
  </TouchableOpacity>
  )
}

export default Addbutton