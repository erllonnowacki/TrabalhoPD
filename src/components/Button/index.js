import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './style';

export function Button({ title, ...rest } ) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
          <Text style={styles.text}>
              { title }
          </Text>
      </TouchableOpacity>
  );
}