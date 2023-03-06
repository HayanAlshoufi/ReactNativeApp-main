// import { View, Text, Button ,StyleSheet, Image } from 'react-native';
// import React from 'react';
// import Shoppingcart from '../../assets/images/Shopping-Cart.png';
// import { useSelector } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  FlatList as NativeList,
  TouchableOpacity
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import VirtualizedList from '../../VirtualizedList';
import utf8 from 'utf-8';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../store/reducers';

import {useTranslation} from 'react-i18next';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ShoppingCart = ({navigation}) => {

  const [cartCount,setCartCount] = useState(0) ;
  const removeItemFromCart = item => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = item => {
    console.log(item);
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = item => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };
  // const items =useSelector(state=>state);
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();


  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    setCartCount(total);
  }

useEffect(()=>{
getTotalQuantity();
},[cart])

  const {t} = useTranslation();



  return (
    <View style={styles.container}>
          <View style={styles.total}>
            <Fontisto
              name="shopping-basket-add"
              size={wp(10)}
              color="#a80302"
              style={styles.icon}
            />
            <Text style={styles.counter}>{cartCount}</Text>

          </View>
      <VirtualizedList>
        {/* <Pressable>
                  <Text
                    style={{
                      borderColor: 'gray',
                      borderWidth: 1,
                      marginVertical: 10,
                      padding: 5,
                      backgroundColor:'#c50c0a',
           
                    }}>
                    REMOVE FROM CART
                  </Text>
                </Pressable> */}
        {/* <Image
          source={Shoppingcart}
          style={styles.Shoppingcart}
          resizeMode="contain"
        />
      <Text style={styles.Cart}>Shopping Cart</Text>
      */}

        {cart.map((item, index) => (
          <View
            style={{
              padding: wp(3),
              paddingVertical: wp(0),
              paddingTop: hp(0),
              marginBottom: hp(-5),
              top: hp(1),
            }}
            key={index}>
            <View style={{top: hp(1), left: wp(30), position: 'absolute'}}>
              <Text
                style={{fontWeight: 'bold', fontSize: wp(5), color: 'black'}}>
                {t(item.name)}
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: wp(4), color: 'green'}}>
                {item.price} {t('AED')}
              </Text>
            </View>
            <Image
              style={{
                width: wp(25),
                height: hp(12),
                borderRadius: hp(1),
                marginTop: hp(1),
              }}
              source={{uri: item.image}}
            />
            <Pressable
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
                backgroundColor: 'green',
                borderRadius: wp(1),
                width: wp(25.5),
                bottom: hp(7),
                left: hp(14),
                height: hp(4.3),
              }}>
              <Pressable onPress={() => decreaseQuantity(item)}>
                <Text
                  style={{
                    fontSize: wp(5),
                    color: 'white',
                    paddingHorizontal: wp(2.6),
                    fontWeight: 'bold',
                  }}>
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    fontSize: wp(5),
                    color: 'white',
                    paddingHorizontal: wp(2.5),
                    fontWeight: 'bold',
                  }}>
                  {item.quantity}
                </Text>
              </Pressable>
              <Pressable onPress={() => increaseQuantity(item)}>
                <Text
                  style={{
                    fontSize: wp(5),
                    color: 'white',
                    paddingHorizontal: wp(2.6),
                    fontWeight: 'bold',
                  }}>
                  +
                </Text>
              </Pressable>

              <Pressable onPress={() => removeItemFromCart(item)}>
                <Text
                  style={{
                    flexDirection: 'row',
                    borderColor: 'gray',
                    borderRadius: wp(1),
                    padding: wp(1),
                    backgroundColor: '#c50c0a',
                    width: wp(24),
                    height: hp(4.3),
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    left: wp(12),
                  }}>
                  {t('REMOVE')}
                </Text>
              </Pressable>
            </Pressable>
          </View>
        ))}
      </VirtualizedList>
    
    </View>
  );
};

const styles = StyleSheet.create({
  icon:{
    left:wp(82),
    right: wp(1),
    top: hp(1.5),
  },
  total:{
    
    
  },
  counter:{
    color: 'white',
    fontWeight:'bold',
    fontSize: wp(3.5),
    textAlign: 'center',
    borderRadius: wp(10),
    borderColor:'black',
    borderWidth: wp(0.2),
    width: 20,
    height: 20,
    backgroundColor: '#a80302',
    position: 'absolute',
    left: wp(90.3),
    top: hp(1.8),
  },
});
export default ShoppingCart;
