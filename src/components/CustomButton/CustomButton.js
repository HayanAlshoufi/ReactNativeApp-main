import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container,
      styles[`container_${type}`],
      bgColor ? { backgroundColor: bgColor } : {},
      
      ]}>

      <Text
        style={[styles.text, styles[`text_${type}`],
        fgColor ? {color: fgColor} : {}
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 7,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#a80302',
  },



  container_SECONDARY:{
    borderStartColor:'#3B71F3',
    borderWidth:2,
  },
  container_TERTIARY: {},




  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize:17,
  },

  text_TERTIARY: {
    color: 'gray',
  },

  text_SECONDARY: {
    color:'#3B71F3',
  },
});

export default CustomButton