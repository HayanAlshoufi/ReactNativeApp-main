import React, {useState} from 'react';
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
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

import {useSelector, useDispatch} from 'react-redux';



import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TextInput as MaterialTextInput} from 'react-native-paper';


const ConfirmEmailScreen = () => {
  const uName = useSelector(state => state.user.uName);
  const email = useSelector(state => state.user.email);
  const uPass = useSelector(state => state.user.uPass);
  const rePass = useSelector(state => state.user.rePass);
  console.log('User Name: ' + uName);
  console.log('Email: ' + email);
  console.log('Password: ' + uPass);
  console.log('Repeat Password: ' + rePass);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      confirm: '',
    },
  });

  /*   const [code, setCode] = useState(''); */

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const onResendPassed = () => {
    navigation.navigate('ConfirmEmail');
    console.warn('Resend code');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        {/*
                <CustomInput
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setCode}
                />
*/}

        <Controller
          control={control}
          rules={{
            maxLength: 20,
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <MaterialTextInput
              placeholder="Enter your confirmation code"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode="outlined"
              label={"Confirmation Code"}
              style={styles.logIn}
              placeholderTextColor='gray'
              outlineColor='gray'
              theme={{ colors: { primary: '#a80302'}}}
            />
          )}
          name="confirm"
        />
        {errors.confirm && <Text style={styles.input}>This is required.</Text>}

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <TouchableOpacity>
          <Text type="SECONDARY" style={styles.SignIn} onPress={onResendPassed}>
            Resend code
            {'                               '}
            <Text
              type="SECONDARY"
              style={styles.SignIn}
              onPress={onSignInPressed}>
              Back to Sign in
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: wp(5),
    marginVertical: wp(6),
    paddingTop: hp(5),
  },

  title: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: '#a80302',
    marginTop: hp(4),
    marginBottom: hp(1),
    bottom:hp(5),
  },

  SignIn: {
    fontWeight: 'bold',
    fontSize: wp(3.5),
    marginVertical: wp(3),
    color: 'red',
  },

  input: {
    color: 'red',
    marginLeft: wp(1),
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  logIn:{
    width:wp(90),
    backgroundColor:'white',    
  },
});
export default ConfirmEmailScreen;
