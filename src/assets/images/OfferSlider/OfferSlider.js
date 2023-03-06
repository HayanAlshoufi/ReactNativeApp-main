import {StyleSheet, Text, View, Image, styleofferSlider} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';


const OfferSlider = () => {
  return (
    <View>
      <View style={styleofferSlider}>
        <Swiper>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/Banar-1.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/Banar-2.jpg')}
              style={styles.image}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/Banar-3.jpg')}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({});
