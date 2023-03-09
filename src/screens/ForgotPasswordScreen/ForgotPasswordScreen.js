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
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { TextInput as MaterialTextInput} from 'react-native-paper';


const ForgotPasswordScreen = () => {

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

 /* const [username, setUsernme] = useState(''); */

  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <Controller
          control={control}
          rules={{
            maxLength: 20,
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <MaterialTextInput
              placeholder="Username"
              
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode="outlined"
              label={"Username"}
              style={styles.logIn}
              placeholderTextColor='gray'
              outlineColor='gray'
              theme={{ colors: { primary: '#a80302'}}}
            />
          )}
          name="username"
        />
        {errors.username && <Text style={styles.input}>This is required.</Text>}

        <CustomButton text="SEND" onPress={handleSubmit(onSendPressed)} />

        <Text type="SECONDARY" style={styles.SignIn} onPress={onSignInPressed}>
          Back to Sign in
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: wp(5),
    marginVertical: wp(6),
    paddingTop: wp(8),
  },

  title: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: '#a80302',
    marginTop: hp(3),
    marginBottom: hp(2),
    bottom:hp(5),
  },

  SignIn: {
    fontWeight: 'bold',
    fontSize: wp(5),
    marginVertical: hp(1),
    color: 'black',
  },

  input: {
    color: 'red',
    marginLeft:hp(1),
    alignSelf:'flex-start',
    alignItems:'flex-start'
    
  },
  logIn:{
    width:wp(90),
    backgroundColor:'white',
    
  },
});
export default ForgotPasswordScreen;
