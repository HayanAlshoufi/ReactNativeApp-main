import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  FlatList as NativeList,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import React from 'react';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';







const Maps = ({navigation}) => {




  return (
    
    <View style={styles.container}>
      
      <GooglePlacesAutocomplete
      style={styles.search}
      placeholder='Search'

      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAyWcuMC_87NTOnbD-aK60OPvYbZcQojSA',
        language: 'en',
      }}
      textInputProps={{ placeholderTextColor: 'gray' }}

      styles={{
        container:{flex:0 ,with:"100%",backgroundColor:'#a80302'},

        textInput: {
          backgroundColor: "white",
          color: "#a80302",
          },
          description:{
            color:"black"
          }
      }}

    />
      
      <MapView style={styles.map} 
      zoomControlEnabled={true}
      showsMyLocationButton={true}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 25.249812,
        longitude: 55.339828,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
      <Marker
      coordinate={{latitude: 25.249812,
      longitude: 55.339828,}}
      title='Dubai'
      description='Algarhoud'
      />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  map: {
    flex: 1,
  },
});

export default Maps;
