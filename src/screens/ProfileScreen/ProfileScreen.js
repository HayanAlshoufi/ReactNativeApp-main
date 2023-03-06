import {View, Text, Button, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import Img from '../../assets/images/burger-2.jpg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';

import {useTranslation} from 'react-i18next';


import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';


const showAlert = () =>
  Alert.alert(
    'User Information:',
    'UserName:     Hayan                           Number:         0561692951                    Address:        Dubai',
  );

const ProfileScreen = () => {

const {t}=useTranslation();


  const navigation = useNavigation();

  const onNewPage = () => {
    navigation.navigate('Api');
    };

  return (
    <View style={styles.container}>
      <Image source={Img} style={styles.userImage} />
      <Text style={styles.userName}>{t("User Name")}</Text>
      <Text>0561692951</Text>
      <View style={styles.showMore}>
        <Button color="#ff5c5c" title={t("SHOW MORE")} onPress={showAlert}/>
      </View>
      <TouchableOpacity onPress={onNewPage}>
            <MaterialIcons
              name="api"
              size={wp(12)}
              style={{color:'black',top:hp(3)}}
            />
          </TouchableOpacity>
          <Text style={{fontSize:wp(7),color:'black',top:hp(3),fontWeight:'bold'}}>- Api -</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#8fcbbc',
    padding: wp(2),
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: wp(20),
    borderWidth: wp(1),
    height: hp(18),
    marginBottom: hp(10),
    width: hp(18),
    position: 'relative',
    top: hp(5),
  },
  userName: {
    fontWeight: 'bold',
    fontSize: wp(7),
    color: 'black',
  },
  showMore: {
    margin: wp(3),
  },
});
export default ProfileScreen;
