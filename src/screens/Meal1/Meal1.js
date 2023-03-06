import {View, Text, Button, StyleSheet, TextInput, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import burger from '../../assets/images/burger.jpg';

import {useTranslation} from 'react-i18next';



const Meal1 = ({navigation}) => {

  const {t}=useTranslation();
  return (
    <View style={styles.container}>
      <Image
          source={burger}
          style={styles.ImgBurger}
          resizeMode="contain"
        />
      <Text style={styles.Burger}>{t("Burger")}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#8fcbbc',
  },

  searchBox: {
    flexDirection: 'row',
    width: '93%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    margin: 20,
    marginLeft: 16,
    marginTop:100,
    elevation: 10,
  },
  searchIcon: {
    color: 'blue',
  },
  input: {
    marginLeft: 3,
    width: '90%',
    fontSize: 19,
    color: 'black',
    marginBottom: -9,
    marginTop: -10,
  },
  Burger: {
    fontWeight: 'bold',
    fontSize: 23,
    color: 'black',
    position: 'absolute',
    top: 15,
    right:"40%"
  
  },
  ImgBurger: {
    width:'100%',
    height:'40%',
    
    },
});

export default Meal1;
