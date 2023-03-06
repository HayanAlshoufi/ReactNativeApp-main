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
import React,{ useState, useEffect } from 'react';
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



const Pizza = () => {

  const {t} = useTranslation();
  const cart = useSelector(state => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const data = [
    {
      id: '8',
      image:
        'https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=740&t=st=1676874001~exp=1676874601~hmac=bae3c5df59ab908d2ffb1a512e097ed22bedb591224ed587dbd9671b5b200b7c',

      name: 'Veggie Pizza',
      price: '47',
    },
    {
      id: '9',
      image:
        'https://media.istockphoto.com/id/1221264109/photo/pizza-four-cheeses-on-bamboo-bottom-on-wooden-table-top-view.jpg?s=1024x1024&w=is&k=20&c=LVhkLvlBmiYYGB7Lup8ybqKFTssu_oJS2XDORcx1f0w=',
      name: 'Sicilian Pizza',
      price: '20',
    },
    {
      id: '10',
      image:
        'https://media.istockphoto.com/id/1398155860/photo/pizza-with-pears-and-gorgonzola.jpg?s=1024x1024&w=is&k=20&c=SmnoNEMmYEIf2dWCWVH9swOND2jG_nsPQUN_RK_E67s=',

      name: 'Cheese Pizza',
      price: '23',
    },
    {
      id: '11',
      image:
        'https://media.istockphoto.com/id/1398155858/photo/pizza-with-pears-and-gorgonzola.jpg?s=1024x1024&w=is&k=20&c=w8ovaoPLAjV951nOOGEDorq3rh4ZhLxAgHXjmPTkaIs=',

      name: 'Hawaiian Pizza',
      price: '25',
    },
    {
      id: '12',
      image:
        'https://media.istockphoto.com/id/178483558/photo/pizza.jpg?s=1024x1024&w=is&k=20&c=FhVbtNHGuHiqb3YbwSpfeuj8y5UgGC-5-7t4I7BPLWs=',

      name: 'BBQ Pizza',
      price: '40',
    },
    {
      id: '13',
      image:
        'https://media.istockphoto.com/id/1221264109/photo/pizza-four-cheeses-on-bamboo-bottom-on-wooden-table-top-view.jpg?s=1024x1024&w=is&k=20&c=LVhkLvlBmiYYGB7Lup8ybqKFTssu_oJS2XDORcx1f0w=',

      name: 'Margherita Pizza',
      price: '37',
    },
    {
      id: '14',
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/21/46/american-1239081_960_720.jpg',

      name: 'Pepperoni Pizza',
      price: '36',
    },
    {
      id: '15',
      image:
        'https://media.istockphoto.com/id/656703220/photo/delicious-homemade-margarita-pizza.jpg?s=1024x1024&w=is&k=20&c=z1L5bic97NsunobCcrtq_LGB4upOcaJ7IDhOT3zymjI=',

      name: 'Meat Pizza',
      price: '39',
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
  const handleIncrement = (item) => {
    dispatch(increment(item)) 
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

export default Pizza;

const styles = StyleSheet.create({
  Cart: {
    position: 'absolute',
    right: wp(4),
    top: hp(2),
  },
  icon: {

  },
});
