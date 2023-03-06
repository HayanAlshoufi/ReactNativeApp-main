import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  FlatList as NativeList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import Categories from '../../components/Categories/Categories';
import OfferSlider from '../../components/OfferSlider/OfferSlider';
import FeaturedRow from '../../components/FeaturedRow/FeaturedRow';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Himenus from '../../assets/images/himenus.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import VirtualizedList from '../../VirtualizedList';

/////
import {useTranslation} from 'react-i18next';
/////
import Test from '../Test';

import {useSelector, useDispatch} from 'react-redux';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const himenusSite = () => {
  Linking.openURL('https://himenus.com/');
};

const HomeScreen = ({navigation}) => {
  /////
  const {t} = useTranslation();
  /////
  //Redux test
  const name = useSelector(state => state.user.name);
  const pass = useSelector(state => state.user.pass);
  console.log('User Name: ' + name);
  console.log('Password: ' + pass);



  return (
    <View style={styles.container}>
      <VirtualizedList>
        <View style={{flexDirection: 'row'}}>
          <Image source={Himenus} style={styles.Logo} />
     <Test/>
          <TouchableOpacity onPress={himenusSite}>
            <MaterialCommunityIcons
              name="web"
              size={wp(10)}
              style={styles.myIcon}
            />
          </TouchableOpacity>
        </View>
        {/* <Text>{name}</Text> */}
        <StatusBar />
        <View style={styles.searchBox}>
          <AntDesign
            name="search1"
            size={wp(7)}
            color="#000000"
            style={styles.searchIcon}
          />

          <TextInput style={styles.input} placeholder={t('Search')} placeholderTextColor="gray" />
        </View>

        <Categories />
        <OfferSlider />
        <FeaturedRow
          id="123"
          title={t("Burger 1")}
          description={t("delicious burger")}
        />
        <FeaturedRow
          id="1234"
          title={t("Burger 2")}
          description={t("delicious burger")}
        />
        <FeaturedRow
          id="12345"
          title={t("Burger 3")}
          description={t("delicious burger")}
        />
      </VirtualizedList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
  },
  searchBox: {
    flexDirection: 'row',
    height: hp(6),
    backgroundColor: 'white',
    borderRadius: wp(10),
    alignItems: 'center',
    textAlign: 'center',
    padding: wp(1),
    margin: wp(5),
    marginLeft: wp(4),
    elevation: wp(3),

  },
  input: {
    marginLeft: wp(1),
    fontSize: wp(5),
    color: 'black',
    marginBottom: hp(-0.6),

  },
  searchIcon: {
    color: 'red',
  },

  Logo: {
    resizeMode: 'contain',
    height: hp(6),
    width: wp(47),
    marginRight: wp(44),
    marginLeft:wp(-5),
    top:hp(0.5),
  },
  myIcon: {
    marginRight: wp(1),
    marginTop: hp(1),
    color: '#a80302',
    
  },
});

export default HomeScreen;
