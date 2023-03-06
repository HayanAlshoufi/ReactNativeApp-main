import {View, Text, StyleSheet,Button,TouchableOpacity,I18nManager} from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import'../languages/i18n';
import RNRestart from "react-native-restart";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



    
const Test = () => {
  const {t, i18n} = useTranslation();
  return (
    <View style={{flex:1,position:'absolute',right:70,top:5,width:150}}>
      <View         
      style={{
          flexDirection: 'row',
          marginLeft:wp(7),
          marginTop:hp(0.5),

        }}
        >

        {/* <SwitchSelector
          options={options}
          initial={0}
          onPress={language => {
            i18n.changeLanguage(language);
          }}
        /> */}




        <TouchableOpacity
          onPress={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
          .then(() => {
            I18nManager.forceRTL(i18n.language === 'ar');
            RNRestart.Restart();

          })
          .catch(err => {
            console.log('something went wrong while applying RTL');
          })
            
        } //Here I change the language to "es" Spanish
          style={Styles.button1}>
          <Text style={{color: '#000',fontWeight:'bold'}}>EN/AR</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => i18n.changeLanguage('fr')} //Here I change the language to "de" German
          style={Styles.button}>
          <Text style={{color: '#000',fontWeight:'bold'}}>FR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Test;
const Styles = StyleSheet.create({
  button: {
    width:wp(8),
    alignItems:'center',
    height:hp(3.8),
    backgroundColor: '#ffffff',
    padding: wp(1.4),
    borderRadius: wp(1.5),
    margin: wp(1.4),
    elevation:wp(2)
  },
  button1: {
    width:wp(14),
    height:hp(3.8),
    backgroundColor: '#ffffff',
    padding: wp(1.4),
    borderRadius: wp(1.5),
    margin: wp(1.4),
    elevation:wp(2)
  },
});