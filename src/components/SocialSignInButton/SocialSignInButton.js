import { StyleSheet, Text, View, TouchableOpacity,Image,Linking } from 'react-native'
import React, { useEffect } from 'react';
import Google from '../../assets/images/Google.png';
import Facebook from '../../assets/images/Facebook.png';
import Apple from '../../assets/images/Apple.png';



import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import {
    GoogleSignin,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


const SocialSignInButton = () => {
    useEffect(() => {
        GoogleSignin.configure({
          scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
          webClientId: '764569608740-odpiqbmfv96d85ngkcbstpbb7avvvqkd.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
          offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
          // hostedDomain: '', // specifies a hosted domain restriction
          forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
          // accountName: '', // [Android] specifies an account name on the device that should be used
          // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
          googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
          openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
          profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
        });
      }, []);
    
      const googleLogin = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log('user info', userInfo);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log(error);
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log(error);
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log(error);
          } else {
            // some other error happened
            console.log(error);
          }
        }
      };


       const FacebookLogin=async()=>{
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      
        if (result.isCancelled) {
          throw 'User cancelled the login process';
        }
      
        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();
      
        if (!data) {
          throw 'Something went wrong obtaining access token';
        }
      
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
      }


    const onSignInGoogle = () => {
        Linking.openURL('https://www.google.com/');
    }

    const onSignInFacebook = () => {
        Linking.openURL('https://www.facebook.com/');
    }

    const onSignInApple = () => {
        Linking.openURL('https://www.apple.com/ ');

    }
    return (
        <View style={{
            flex: 1,
        }}>
            <Text style={{ textAlign: 'center', marginTop: hp(7),color:'gray' }}>------------------------------ or Login With ------------------------------</Text>

            <View style={styles.socialLoginView}>

                <TouchableOpacity onPress={googleLogin}>
                    <Image
                        source={Google}
                        style={styles.Google}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={FacebookLogin}>
                    <Image

                        source={Facebook}
                        style={styles.Facebook}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={onSignInApple}>
                    <Image
                        source={Apple}
                        style={styles.Apple}
                    />
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default SocialSignInButton

const styles = StyleSheet.create({
    Google: {
        width: wp(11),
        height: hp(6),


    },
    Facebook: {
        width: wp(12),
        height: hp(6.5),

    },
    Apple: {
        width: wp(11),
        height: hp(6),

    },

    socialLoginView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        marginTop: hp(1),

    },
});