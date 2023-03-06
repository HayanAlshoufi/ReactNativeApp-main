import {Text, View,   FlatList as NativeList,StyleSheet} from 'react-native';
import React from 'react';


const VirtualizedList = 
   ({ children }) => {
     return (
       <NativeList
         data={[]}
         showsVerticalScrollIndicator={false}
         keyExtractor={() => keyExtractor()}
         initialNumToRender={7}
         keyboardShouldPersistTaps="always"
         listKey={keyExtractor()}
        renderItem={null}
         ListHeaderComponent={<View>{children}</View>}
       />
     );
   };
   const keyExtractor = () => {
     return (
       new Date().getTime().toString() +
       Math.floor(Math.random() * Math.floor(new Date().getTime())).toString()
    );
   };


   
   export default VirtualizedList