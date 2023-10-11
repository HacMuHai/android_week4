import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.boxImgItem}>
          <Image
            style={styles.imgUsb}
            source={require('../assets/usb.png')}
          />
        </View>
        <Text style={styles.infoItem}>USB Bluetooth Music Receiver {'\n'}HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentBox1}>
          <View style={styles.viewTextBox1}>
          <Text style={styles.textBox1}>Cực kỳ hài lòng</Text>
          </View>
          <View style={styles.starBox1}>
            <Image
              style={styles.imgStar}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.imgStar}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.imgStar}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.imgStar}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.imgStar}
              source={require('../assets/star.png')}
            />
          </View>
          <TouchableOpacity style={styles.addImgBox1}>
            <Image
              style={styles.imgCamere}
              source={require('../assets/camera.png')}
            />
            <Text style={styles.textAddImg}> Thêm hình ảnh</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.contentBox2}>

        </View>
      </View>
      <View style={styles.footer}>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  //header
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  boxImgItem: {
    flex: 2,
    // height: 100,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  imgUsb: {
    // flex:1,
    width: 55,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  infoItem: {
    flex: 6,
    padding: 5,
    fontWeight: 700,
    fontSize: 16
  },


  //content
  content: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  contentBox1:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  viewTextBox1:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  textBox1:{
    fontSize: 18,
    fontWeight: 700,
    textAlign: "left"
  },
  starBox1:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  imgStar:{
    width: 50,
    height: 50
  },
  addImgBox1:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  imgCamere:{
    width: 20,
    height: 20
  },
  textAddImg:{
    fontSize: 18,
    fontWeight: 700
  },

  contentBox2:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  //footer
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

});
