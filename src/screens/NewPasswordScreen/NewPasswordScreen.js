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

  const[passwordVisable,setPasswordVisable]=useState(true);

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
            <MaterialTextInput
              placeholder="Enter your confirmation code"
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
            <MaterialTextInput
              placeholder="Enter your new password"
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
              mode="outlined"
              label={"New Password"}
              style={styles.logIn}
              placeholderTextColor='gray'
              outlineColor='gray'
              theme={{ colors: { primary: '#a80302'}}}
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
  logIn:{
    width:wp(90),
    backgroundColor:'white',
    
  },
});
export default NewPasswordScreen;
