import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-web";


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
          <TextInput 
            style={styles.inputContentBox2} 
            placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
            multiline={true} />
          <TouchableOpacity style={styles.linkContentBox2}>
            <Text style={styles.textLinkContentBox2}>https://meet.google.com/nsj-ojwi-xpp</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnGuifooter}>
            <Text style={styles.txtBtnGuifooter}>Gửi</Text>
        </TouchableOpacity>
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
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10
  },
  boxImgItem: {
    flex: 2,
    // height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  imgUsb: {
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
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    gap:15
  },
  contentBox1: {
    flex: 1,
    width: "85%",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 30
  },
  viewTextBox1: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textBox1: {
    fontSize: 22,
    fontWeight: 700,
  },
  starBox1: {
    flex: 1,
    gap: 15,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imgStar: {
    width: 45,
    height: 45
  },
  addImgBox1: {
    flex: 1.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: "#1511EB"
  },
  imgCamere: {
    width: 50,
    height: 40
  },
  textAddImg: {
    fontSize: 24,
    fontWeight: 700
  },

  //box2

  contentBox2: {
    flex: 1,
    width:"85%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10

  },
  inputContentBox2: {
    flex: 1,
    position:"relative",
    width: "100%",
    borderWidth: 2,
    borderRadius: 5,
    borderBlockColor: "#C4C4C4",
    color:"#C4C4C4",
    fontSize:18,
    fontWeight:700,
    paddingTop:10,
    paddingLeft:20,
    paddingRight:10
  },
  linkContentBox2:{
    position:"absolute",
    bottom:10,
    right:20
  },
  textLinkContentBox2:{
    fontSize:14,
    fontWeight:700
  },
  //footer
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  btnGuifooter:{
    width:"85%",
    height:45,
    backgroundColor:"#0d5db6",
    borderRadius:10,
    borderColor:"#1511EB",
    justifyContent:"center",
    alignItems:"center"
  },
  txtBtnGuifooter:{
    fontSize:22,
    fontWeight:700,
    color:"#FFFFFF"
  },

});
