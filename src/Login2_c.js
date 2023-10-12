import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, CheckBox } from 'react-native';
// import CheckBox from 'react-native-check-box'
import { TextInput } from "react-native-web";


export default function App() {
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  

  return (
    <LinearGradient
      style={styles.container}
      colors={['#3B3B98', '#C4C4C4']}>
      <View style={styles.containerFull}>
        <View style={styles.containerTitle}>
          <Text style={styles.txtTitle}>PASSWORD GENERATOR</Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.inputPassWord}></Text>
        </View>
        <View style={styles.containerContent}>
          <View style={styles.contentRow}>
            <Text style={styles.txtRow}>Password length</Text>
            <TextInput style={styles.inputRowPw} />
          </View>

          <View style={styles.contentRow}>
            <Text style={styles.txtRow}>Include lower case letters</Text>
            <CheckBox
              value={isSelected1}
              onValueChange={setSelection1}
              style={styles.checkbox}
            />
          </View>

          <View style={styles.contentRow}>
            <Text style={styles.txtRow}>Include upcase letters</Text>
            <CheckBox
              value={isSelected2}
              onValueChange={setSelection2}
              style={styles.checkbox}
            />
          </View>

          <View style={styles.contentRow}>
            <Text style={styles.txtRow}>Include number</Text>
            <CheckBox
              value={isSelected3}
              onValueChange={setSelection3}
              style={styles.checkbox}
            />
          </View>

          <View style={styles.contentRow}>
            <Text style={styles.txtRow}>Include special symbol</Text>
            <CheckBox
              value={isSelected4}
              onValueChange={setSelection4}
              style={styles.checkbox}
            />
          </View>

        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.btnGenerate}>
            <Text style={styles.txtBtnGenerate}>GENERATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  containerFull: {
    flex: 0.95,
    // height:"95%",
    width: "90%",
    backgroundColor: "#23235B",
    borderRadius: 15,
  },

  //title
  containerTitle: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  txtTitle: {
    width: "70%",
    fontSize: 25,
    fontWeight: 700,
    color: "white",
    textAlign: "center"
  },


  //input
  containerInput: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  inputPassWord: {
    width: "90%",
    height: "60%",
    backgroundColor: "#151537",
  },

  //content
  containerContent: {
    flex: 8,
    justifyContent: "space-between",
    alignItems: "center"
  },

  contentRow: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  txtRow: {
    flex: 9,
    fontSize: 20,
    fontWeight: 700,
    color: "white"
  },
  inputRowPw: {
    // flex:2,
    width: "40%",
    height: 35,
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: 600,
    // textAlign:"center"
  },
  checkbox: {
    width: 30,
    height: 30,
  },
  //btn
  containerBtn: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  btnGenerate:{
    width:"90%",
    height:50,
    backgroundColor:"#3B3B98",
    justifyContent:"center",
    alignItems:"center"
  },
  txtBtnGenerate:{
    fontSize:18,
    fontWeight:700,
    color:"white"
  }

});
