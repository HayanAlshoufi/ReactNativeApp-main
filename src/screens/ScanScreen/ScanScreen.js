import {View, Text, Button, StyleSheet, TextInput, Image,TouchableOpacity,AppRegistry,Linking,alert} from 'react-native';
import React, { useState } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import {useTranslation} from 'react-i18next';



import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const ScanScreen = ({navigation}) => {

  const {t} = useTranslation();
   const onSuccess = e => {
  alert(e.data)
 
  }
  return (
    <View style={styles.container}>
      <QRCodeScanner
      onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={
          <Text style={styles.centerText}>
            <Text style={styles.textBold}>QR Scan</Text> 
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    backgroundColor: 'white',
  },

  
  textBold: {
    fontWeight: '500',
    color: '#000'
  
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default ScanScreen;
