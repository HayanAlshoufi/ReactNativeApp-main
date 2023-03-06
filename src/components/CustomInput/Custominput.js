import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CustomInput = ({value , onChangeText , placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.input}
      placeholderTextColor={'grey'}
      secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'100%',
    borderColor:'#E8E8E8',
    borderWidth:1,
    borderRadius:5,
    margin:5,
    },
    input:{
      color:'black',
      
    },
});


export default CustomInput