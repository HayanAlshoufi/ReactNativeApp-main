import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Icon,
  TouchableOpacity,
  Linking,
  Touchable,
  rules,
  Dimensions,
} from 'react-native';
import Logo from '../../assets/images/InLogic-IT-Solution.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

import {useSelector, useDispatch} from 'react-redux';
import {setName, setPass} from '../../store/reducerReg';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SignInScreen = () => {
  
  

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const navigation = useNavigation();

  const onSignInPressed = data => {
    //validate user
    console.log(data);
    dispatch(setName(data.username));
    dispatch(setPass(data.password));
    navigation.navigate('HomeScreen');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  const name = useSelector(state => state.user.name);
  const pass = useSelector(state => state.user.pass);
  const dispatch = useDispatch();

  // console.log("User Name: "+name);
  // console.log("Password: "+pass);

  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.Logo} resizeMode="contain" />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && <Text style={styles.input}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 20,
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.input}>This is required.</Text>}

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />


        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Don't have anaccount? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />

        <SocialSignInButton />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: hp('2'),
  },
  Logo: {
    width: wp('55%'),
    maxWidth: wp('300'),
    maxHeight: hp('25'),
  },
  input: {
    color: 'red',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
});
export default SignInScreen;
