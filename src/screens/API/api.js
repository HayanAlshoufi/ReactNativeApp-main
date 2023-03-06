import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';



const Api = () => {
  const [data, setData] = useState([]);
  const baseURL = 'https://jsonplaceholder.typicode.com';

  const getApi = () => {
    axios({
      method: 'GET',
      url: `${baseURL}/posts`,
    })
      .then(Response => setData(Response.data))
      .catch(Error => console.error(Error));
  };

  const get_by_ID = () => {
    axios({
      method: 'GET',
      url: `${baseURL}/posts/7`,
    })
      .then(Response => console.log(Response.data))
      .catch(Error => console.error(Error));
  };

  const postApi = () => {
    axios({
      method: 'POST',
      url: `${baseURL}/posts`,
      body:JSON.stringify({
        id:101,
        title:'New Title',
        body:'New Body for the data.',
      })
    })
      .then(Response => console.log(Response))
      .catch(Error => console.error(Error));
  };

  const patchApi = () => {
    axios({
      method: 'PATCH',
      url: `${baseURL}/posts/16`,
      body:JSON.stringify({
        id:101,
        title:'Update Title',
        body:'Update Body for the data.',
      })
    })
      .then(Response => console.log(Response))
      .catch(Error => console.error(Error));
  };

  const deleteApi = () => {
    axios({
      method: 'DELETE',
      url: `${baseURL}/posts/16`,
    })
      .then(Response => console.log(Response))
      .catch(Error => console.error(Error));
  };



  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'black',
        }}>
        - Api -
      </Text>
      <TouchableOpacity onPress={getApi}>
        <View
          style={{
            borderRadius: 50,
            borderColor: 'red',
            backgroundColor: 'black',
            marginTop: 50,
            width: '60%',
            marginLeft: '20%',
          }}>
          <Text style={styles.GET}>GET</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={get_by_ID}>
        <View
          style={{
            borderRadius: 50,
            borderColor: 'red',
            backgroundColor: 'black',
            marginTop: 50,
            width: '60%',
            marginLeft: '20%',
          }}>
          <Text style={styles.GET}>GET DY ID</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={postApi}>
        <View
          style={{
            borderRadius: 50,
            borderColor: 'red',
            backgroundColor: 'black',
            marginTop: 50,
            width: '60%',
            marginLeft: '20%',
          }}>
          <Text style={styles.GET}>POST</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={patchApi}>
        <View
          style={{
            borderRadius: 50,
            borderColor: 'red',
            backgroundColor: 'black',
            marginTop: 50,
            width: '60%',
            marginLeft: '20%',
          }}>
          <Text style={styles.GET}>PATCH</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={deleteApi}>
        <View
          style={{
            borderRadius: 50,
            borderColor: 'red',
            backgroundColor: 'black',
            marginTop: 50,
            width: '60%',
            marginLeft: '20%',
          }}>
          <Text style={styles.GET}>DELETE</Text>
        </View>
      </TouchableOpacity>





      <FlatList
        data={data}
        ListEmptyComponent={() => (
          <Text
            style={{
              fontSize: 40,
              color: 'black',
              textAlign: 'center',
              marginTop: '50%',
            }}>
            No Data
          </Text>
        )}
        renderItem={({item}) => (
          <View>
            <Text style={{fontSize: 22, color: 'black'}}>Id:{item.id}</Text>
            <Text style={{fontSize: 22, color: 'black'}} numberOfLines={1}>
              Title:{item.title}
            </Text>
            <Text style={{fontSize: 22, color: 'black'}} numberOfLines={1}>
              Body:{item.body}
            </Text>
          </View>
        )}
      />
    </View>
  );
};




export default Api;

const styles = StyleSheet.create({
  GET: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

