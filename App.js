/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './src/Main';
import Meal2 from './src/screens/Meal2'
import  store  from './src/store/store';
import { Provider as StoreProvider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'; // Splash Screen

// import Test from './src/screens/Test'
const App = () => {

  useEffect(()=>{     // Splash Screen
    setTimeout(()=>{SplashScreen.hide();},500)
  });
  return (
      <StoreProvider store={store}>
      <Main />
      </StoreProvider>
    // <Test/>
    
  );
};

export default App;
