import {StyleSheet, Text, View, ScrollView, ArrowRightIcon,Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';




const FeaturedRow = ({id, title, description }) => {



/* const [username, setUsernme] = useState(''); */

const navigation = useNavigation();

const onNewPage = () => {
navigation.navigate('Meal1');
};

const onNewPage2 = () => {
  navigation.navigate('Meal2');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <ScrollView
      horizontal
      contentContainerStyle={{
      }}
      showsHorizontalScrollIndicator={false}
      >
  




 
      <TouchableOpacity style={styles.box} onPress={onNewPage}>

      <Image   source={require('../../assets/images/burger-1.jpg')}
              style={styles.image}
              
            />
    
            </TouchableOpacity>
       
            <TouchableOpacity style={styles.box} onPress={onNewPage2}>
            <Image   source={require('../../assets/images/burger-2.jpg')}
              style={styles.image}
              
            />

</TouchableOpacity>


        <View style={styles.box}>
        <Image
              source={require('../../assets/images/burger-3.jpg')}
              style={styles.image}
            />
        </View>

        <View style={styles.box}>
        <Image
              source={require('../../assets/images/burger-4.jpg')}
              style={styles.image}
            />
        </View>

        <View style={styles.box}>
        <Image
              source={require('../../assets/images//burger-5.jpg')}
              style={styles.image}
            />
        </View>

        
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  container:{
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
    elevation: 10,
    
  },
  title:{
    color: 'red',
    fontSize: 25,
    fontWeight: '300',
    margin: 10,
  },
  description:{
    left:11,
    color:"gray",
    bottom:15,
  },

  box: {
    backgroundColor: 'white',
    elevation: 20,
    margin: 5,
    padding: 0,
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:200,


  },
  icon:{
    marginRight:10,
    color:'black',
  },

  text:{
    color:'black',
  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:20,
},
});
