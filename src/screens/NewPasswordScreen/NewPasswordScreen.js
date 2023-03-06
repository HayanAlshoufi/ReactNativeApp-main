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



const NewPasswordScreen = () => {
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

  {
/*
    const [username, setUsernme] = useState('');
    const [password, setPassword] = useState('');
 */
  }
  
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <Text style={styles.code}>Confirmation Code *</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Enter your confirmation code"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && <Text style={styles.input}>This is required.</Text>}

        <Text style={styles.code}>Password *</Text>

        <Controller
          control={control}
          rules={{
            maxLength: 20,
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Enter your new password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.input}>This is required.</Text>}

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

        <Text type="SECONDARY" style={styles.SignIn} onPress={onSignInPressed}>
          Back to Sign in
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: wp(5),
    marginVertical: wp(5),
    paddingTop: hp(3),
  },

  title: {
    textAlign: 'center',
    fontSize: wp(7),
    fontWeight: 'bold',
    color: '#a80302',
    marginTop: hp(3),
    marginBottom: wp(6),
  },

  SignIn: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: wp(5),
    marginVertical: wp(3),
    color: '#a80302',
  },

  code: {
    textAlign: 'left',
    marginLeft: wp(2),
    color:'black',
  },
  input: {
    color: 'red',
    marginLeft: wp(2),
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
});
export default NewPasswordScreen;
