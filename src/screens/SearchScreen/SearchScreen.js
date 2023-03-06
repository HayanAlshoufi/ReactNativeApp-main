import {View, Text, Button, StyleSheet, TextInput, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImgSearch from '../../assets/images/Search.png';

import {useTranslation} from 'react-i18next';



import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SearchScreen = ({navigation}) => {

  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.Search}>{t("Search Screen")}</Text>
      <View style={styles.searchBox}>
        <AntDesign
          name="search1"
          size={wp(6)}
          color="#000000"
          style={styles.searchIcon}
        />
        <TextInput style={styles.input} placeholder={t("Search")} placeholderTextColor="gray"/>
        <Image
          source={ImgSearch}
          style={styles.ImgSearch}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    backgroundColor: 'white',
  },

  searchBox: {
    flexDirection: 'row',
    width: wp('93%'),
    height: hp(6),
    backgroundColor: 'white',
    borderRadius: hp(1),
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: wp(4),
    marginTop:hp(12),
    elevation: hp(3),
  },
  searchIcon: {
    color: '#a80302',
    left:wp(1)
  },
  input: {
    fontSize: wp(4),
    color: 'black',
    left:wp(1)
  },
  Search: {
    fontWeight: 'bold',
    fontSize: wp(6),
    color: 'black',
    position: 'absolute',
    top: hp(3),
    right:hp(15)
  
  },
  ImgSearch: {
    width:wp('50%'),
    position:'relative',
    right:wp(80),
    top:hp(40),
    },
});

export default SearchScreen;
