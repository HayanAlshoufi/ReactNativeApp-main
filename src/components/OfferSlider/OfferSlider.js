import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper'; 


const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper autoplay={true} autoplayTimeout={3} showsButtons={false}
        showsPagination={false}
        dotColor='' activeDotColor='red'
        nextButton={<Text style={styles.buttonText}></Text>}
        prevButton={<Text style={styles.buttonText}></Text>}
        >
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/Banner-1.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/Banner-2.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/Banner-3.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/Banner-4.jpg')}
              style={styles.image}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/Banner-5.jpg')}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
    offerSlider:{
        width:'100%',
        height:200,
        borderStartColor:'black',
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,

    },
    slide:{
        width:'100%',
        height:200,
        borderStartColor:'black',
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:20,
    },
    buttonText:{
        color:'red',
        fontSize:50,
        fontWeight:'bold',
    },
});
