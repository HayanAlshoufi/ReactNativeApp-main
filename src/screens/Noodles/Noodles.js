import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  FlatList as NativeList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../store/reducers';
import VirtualizedList from '../../VirtualizedList';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {useNavigation} from '@react-navigation/native';

import {useTranslation} from 'react-i18next';


import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Noodles = () => {
  const {t} = useTranslation();
  const cart = useSelector(state => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const data = [
    {
      id: '16',
      image:
        'https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Noodles-676x1024.jpg',

      name: 'Schezwan Noodles',
      price: '10',
    },
    {
      id: '17',
      image:
        'https://thesaltymarshmallow.com/wp-content/uploads/2018/10/ramen-noodles2.jpg',
      name: 'Ramen Noodle',
      price: '17',
    },
    {
      id: '18',
      image:
        'https://lindseyeatsla.com/wp-content/uploads/2021/11/LindseyEats_Spicy_Garlic_Noodles.jpg',

      name: 'Garlic Noodles',
      price: '23',
    },
    {
      id: '19',
      image:
        'https://lindseyeatsla.com/wp-content/uploads/2022/02/Lindsey_Eats_Sichuan_Spicy_Noodles-3-1024x576.jpg',

      name: 'Sichuan Noodles',
      price: '30',
    },
    {
      id: '20',
      image:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Noodles-with-chilli-oil-eggs-6ec34e9.jpg',

      name: 'Noodles with Eggs',
      price: '45',
    },
    {
      id: '21',
      image:
        'https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-1.jpg',

      name: 'Chinese Fried Noodles',
      price: '15',
    },
    {
      id: '22',
      image:
        'https://www.thespruceeats.com/thmb/6Z5YZAOdWPBJZ2PlLvWDbjEWnlg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-bangkok-street-vendor-noodles-3217098-hero-011-de4bab8913e247b98ab7042680a05bb5.jpg',

      name: 'Noodles',
      price: '56',
    },
    {
      id: '23',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuKIpcqKqwr0WpZ_pGmuXjKwmLA9JgB9Hzw&usqp=CAU',

      name: 'Long Noodles',
      price: '40',
    },
  ];
  const addItemToCart = item => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = item => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = item => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = item => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };

  const navigation = useNavigation();

  const onPres = () => {
    //validate user
    navigation.navigate('Cart');
  };

  return (
    <View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: wp(6),
            fontWeight: 'bold',
            color: 'black',
          }}>
          {t('Items')}
        </Text>
        
      </View>
      <VirtualizedList>
        <View style={{marginTop: hp(4)}}>
          {data.map(item => (
            <Pressable
              key={item.id}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{margin: wp(3)}}>
                <Image
                  style={{width: wp(23), height: wp(23), borderRadius: wp(2)}}
                  source={{uri: item.image}}
                />
              </View>

              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: wp(5), color: 'black'}}>
                  {t(item.name)}
                </Text>
                <Text
                  style={{fontWeight: 'bold', fontSize: wp(4), color: 'green'}}>
                  {item.price} {t('AED')}
                </Text>
                {cart.some(value => value.id == item.id) ? (
                  <Pressable onPress={() => removeItemFromCart(item)}>
                    <Text
                      style={{
                        marginVertical: wp(2),
                        padding: wp(1),
                        backgroundColor: '#c50c0a',
                        width: wp(40),
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {t('REMOVE FROM CART')}
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable onPress={() => addItemToCart(item)}>
                    <Text
                      style={{
                        width: wp(27),
                        marginVertical: wp(2),
                        padding: wp(1),
                        backgroundColor: '#00a340',
                        fontWeight: 'bold',
                      }}>
                      {t('ADD TO CART')}
                    </Text>
                  </Pressable>
                )}
              </View>
            </Pressable>
          ))}

          <Text style={{color: 'black', textAlign: 'center'}}>
            -----------------------------------------------------------------------
          </Text>

       
        </View>
      </VirtualizedList>
      <View style={styles.Cart}>
          <TouchableOpacity onPress={onPres}>
            <Fontisto
              name="shopping-basket-add"
              size={wp(10)}
              color="#a80302"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Noodles;

const styles = StyleSheet.create({
  Cart: {
    position: 'absolute',
    right: wp(4),
    top: hp(2),
  },
  icon: {

  },
});
