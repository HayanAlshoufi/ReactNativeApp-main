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


import {useSelector,useDispatch} from 'react-redux';
import {setUserName,setUserPass,setEmail,setRePass} from '../../store/reducerReg';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  {
    /* 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
*/
  }
  const navigation = useNavigation();

  const onRegisterPressed = (data) => {
    console.log(data);
    dispatch(setUserName(data.username));
    dispatch(setUserPass(data.password));
    dispatch(setEmail(data.email));
    dispatch(setRePass(data.repeatPassword));

    navigation.navigate('ConfirmEmail');
  };





  const onTermsUsePressed = () => {
    console.warn('onTermsUsePressed');
  };

  const onPrivacyPassword = () => {
    console.warn('onPrivacyPassword');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };





  const uName=useSelector(state=>state.user.uName);
  const uPass=useSelector(state=>state.user.uPass);
  const email=useSelector(state=>state.user.email);
  const rePass=useSelector(state=>state.user.rePass);

  const dispatch=useDispatch();


  // console.log("User Name: "+uName);
  // console.log("Password: "+uPass);
  // console.log("Password: "+email);
  // console.log("Password: "+rePass);


  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        
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
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.input}>This is required.</Text>}

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


        <Controller
          control={control}
          rules={{
            maxLength: 20,
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              placeholder="Repeat Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="repeatPassword"
        />
        {errors.repeatPassword && <Text style={styles.input}>This is required.</Text>}





        <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.link} onPress={onTermsUsePressed}>
            {' '}
            Term of Use{' '}
          </Text>{' '}
          and
          <Text style={styles.link} onPress={onPrivacyPassword}>
            {' '}
            Privacy Policy
          </Text>
          .
        </Text>

        <Text type="TERTIARY" style={styles.SignIn}>
          have an account?{' '}
          <Text onPress={onSignInPressed} style={styles.SignInLink}>
            Sign in
          </Text>
        </Text>

        <SocialSignInButton />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: wp('5'),
  },

  title: {
    fontSize: wp('7'),
    fontWeight: 'bold',
    color: '#a80302',
    marginTop: wp(5),
    marginBottom: wp(6),
  },

  text: {
    color: 'gray',
    marginVertical: wp(4),
  },
  link: {
    color: '#FDB075',
  },

  SignIn: {
    fontWeight: 'bold',
    fontSize: wp(4),
    marginVertical: wp(4),
    color:'gray'
  },

  SignInLink: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: wp(4),
  },
  
  input: {
    color: 'red',
    alignSelf:'flex-start',
    alignItems:'flex-start'
  },
});
export default SignUpScreen;
