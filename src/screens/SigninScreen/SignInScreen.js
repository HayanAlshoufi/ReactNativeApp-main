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
import Himenus from '../../assets/images/himenus.png';
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

import {TextInput as MaterialTextInput} from 'react-native-paper';
import {TextInput} from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';

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
  const [passwordVisable, setPasswordVisable] = useState(true);
  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View style={styles.root}>
        <Image source={Himenus} style={styles.Himenus} resizeMode="contain" />
        <Image source={Logo} style={styles.Logo} resizeMode="contain" />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <MaterialTextInput
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode="outlined"
              label={'Username'}
              style={styles.logIn}
              placeholderTextColor="gray"
              outlineColor="gray"
              theme={{colors: {primary: '#a80302'}}}
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
            <MaterialTextInput
              placeholder="Password"
              secureTextEntry={passwordVisable}
              right={
                <MaterialTextInput.Icon
                icon={passwordVisable ? 'eye-off' : 'eye'}                  
                onPress={() => setPasswordVisable(!passwordVisable)}
                iconColor='#a80302'
                />
              }
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.logIn}
              mode="outlined"
              label={'Password'}
              placeholderTextColor="gray"
              outlineColor="gray"
              theme={{colors: {primary: '#a80302'}}}
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
  Himenus: {
    width: wp('50%'),
    maxWidth: wp('300'),
    maxHeight: hp('23'),
  },
  Logo: {
    width: wp('30%'),
    maxWidth: wp('200'),
    maxHeight: hp('2.8'),
    bottom: hp(5.3),
    left: wp(19),
  },
  input: {
    color: 'red',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  logIn: {
    width: wp(90),
    backgroundColor: 'white',
  },

});
export default SignInScreen;
