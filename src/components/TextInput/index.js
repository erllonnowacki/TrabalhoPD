import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './style'

export function TextInput({ text, ...rest } ) {
  return (
    <View style={styles.container}>
      <TextInput 
       style={styles.textinput}
       placeHolder={text} />
    </View>
  )
}