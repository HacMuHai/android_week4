import React from "react";
import OpenApp from './src/Tiki_OK' ;
import { StyleSheet,View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <OpenApp/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
