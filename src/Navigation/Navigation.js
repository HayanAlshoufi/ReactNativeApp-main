//import {View, Text} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { CurvedBottomBar } from 'react-native-curved-bottom-bar';

//import {createDrawerNavigator} from '@react-navigation/drawer'
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

// Screen
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import Maps from '../screens/Maps';
import ProfileScreen from '../screens/ProfileScreen';
import ShoppingCart from '../screens/ShoppingCart';

import SignInScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Meal1 from '../screens/Meal1';
import Meal2 from '../screens/Meal2';
import Pizza from '../screens/Pizza';
import Noodles from '../screens/Noodles';
import Cake from '../screens/Cake';


import Api from '../screens/API/api';




const Stack = createNativeStackNavigator();
// const HomeStack = createStackNavigator();
// const SearchStack = createStackNavigator();
// const NotificationStack = createStackNavigator();
// const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();

//const Drawer=createDrawerNavigator();

// const HomeStackScreen = () =>(
//     <HomeStack.Navigator>
//         <HomeStack.Screen name='Home' component={HomeScreen}/>
//     </HomeStack.Navigator>
// )
// const SearchStackScreen = () =>(
//     <SearchStack.Navigator>
//         <SearchStack.Screen name='Search' component={SearchScreen}/>
//     </SearchStack.Navigator>
// )
// const NotificationStackScreen = () =>(
//     <NotificationStack.Navigator>
//         <NotificationStack.Screen name='Notification' component={Maps}/>
//     </NotificationStack.Navigator>
// )
// const ProfileStackScreen = () =>(
//     <ProfileStack.Navigator>
//         <ProfileStack.Screen name='Profile' component={ProfileScreen}/>
//     </ProfileStack.Navigator>
// )

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
         <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Notification" component={NotificationStackScreen} />
         <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>  */}
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Meal1" component={Meal1} />
        <Stack.Screen name="Meal2" component={Meal2} />
        <Stack.Screen name="Pizza" component={Pizza} />
        <Stack.Screen name="Noodles" component={Noodles} />
        <Stack.Screen name="Cake" component={Cake} />

        <Stack.Screen name="Api" component={Api} />
        <Stack.Screen name="HomeScreen" component={HomeNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const MyDrawer=()=>{
//   return(
//     <Drawer.Navigator>
//       <Drawer.Screen name='Home' component={HomeScreen}/>
//       <Drawer.Screen name='Notification' component={Maps}/>
//     </Drawer.Navigator>
//   )
// }


const HomeNavigation = () => {
  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   activeTintColor: 'green',
      //   inactiveTintColor: 'green',
      //   indicatorStyle: {
      //     backgroundColor: 'green',
      //     height: 5,
      //   },
      //   style: {
      //     elevation: 10,
      //     backgroundColor: 'green',
      //   },
      //   labelStyle: {
      //     color: '#bc0302',
      //     fontWeight: 'bold',
      //     fontSize: 12,
      //   },
      // }}

      screenOptions={({route, navigation}) => {
        return {
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarLabel: navigation.isFocused() ? route.name : '',
          tabBarLabelStyle: {
            color: '#bc0302',
            fontWeight: 'bold',
            fontSize: 12,
          },
        };
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}            //component={MyDrawer}
        options={{
          tabBarIcon: ({focused, color}) => {
            return <FontAwesome5 name="home" size={25} color={color} />;
          },
          tabBarActiveTintColor: '#a80302',
          tabBarInactiveTintColor: '#272726',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Ionicons
                name="search-outline"
                size={25}
                color={color}
                focused={focused}
              />
            );
          },
          tabBarActiveTintColor: '#a80302',
          tabBarInactiveTintColor: '#272726',
        }}
      />

      <Tab.Screen
        name="Cart"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Fontisto
                name="shopping-basket-add"
                size={25}
                color={color}
                focused={focused}
              />
            );
          },
          tabBarActiveTintColor: '#a80302',
          tabBarInactiveTintColor: '#272726',
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Fontisto
                name="map"
                size={25}
                color={color}
                focused={focused}
              />
            );
          },
          tabBarActiveTintColor: '#a80302',
          tabBarInactiveTintColor: '#272726',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Ionicons
                name="ios-person-circle"
                size={25}
                color={color}
                focused={focused}
              />
            );
          },
          tabBarActiveTintColor: '#a80302',
          tabBarInactiveTintColor: '#272726',
        }}
      />
    </Tab.Navigator>




  );
};

export default Navigation;
