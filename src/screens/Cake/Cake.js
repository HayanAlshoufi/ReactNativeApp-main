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

const Cake = () => {
  const {t} = useTranslation();
  const cart = useSelector(state => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const data = [
    {
      id: '24',
      image:
        'https://thehappyfoodie.co.uk/wp-content/uploads/2022/02/LVB_020_Victoria-Sponge-cake2-scaled.jpg',

      name: 'Favourite Cake',
      price: '50',
    },
    {
      id: '25',
      image:
        'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/09/8209-Espresso-Martini-cake.jpg?v=1-0',
      name: 'Chocolate Cake',
      price: '60',
    },
    {
      id: '26',
      image:
        'https://cdn.shopify.com/s/files/1/2725/9456/products/Flavourtown-bakery-Londons_Best-birthday-cake-08_2048x2048.jpg?v=1595502574',

      name: 'Favourite Cake',
      price: '75',
    },
    {
      id: '27',
      image:
        'https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw29ff2761/images/project/WLPROJ-9531/floral-spring-cake.jpg?sw=800&sh=800',

      name: 'Flowers Cake',
      price: '95',
    },
    {
      id: '28',
      image:
        'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',

      name: 'Strawberry Cake',
      price: '80',
    },
    {
      id: '29',
      image:
        'https://preppykitchen.com/wp-content/uploads/2022/05/Naked-Cake-Recipe-Card.jpg',

      name: 'Strawberry Cake',
      price: '80',
    },
    {
      id: '30',
      image:
        'https://img.taste.com.au/9isesBer/taste/2016/11/caramello-cake-105070-1.jpeg',

      name: 'Honey Cake',
      price: '100',
    },
    {
      id: '31',
      image:
        'https://www.cakegallery.ae/image/cache/catalog/0category/birthday%20cake/bday%20cake-500x500h.jpg',

      name: 'Chocolate Cake',
      price: '110',
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

export default Cake;

const styles = StyleSheet.create({
  Cart: {
    position: 'absolute',
    right: wp(4),
    top: hp(2),
  },
  icon: {

  },
});
