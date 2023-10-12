import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, CheckBox } from 'react-native';
import { TextInput } from "react-native-web";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <View style={styles.boxItem}>
          <Image
            style={styles.imgItem}
            source={require('../assets/book.png')}
          />
          <View style={styles.boxInfoItem}>
            <Text style={styles.txtNameItem}> Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.txtNhaCCItem}> Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.txtPriceGiamItem}> 141.800 đ</Text>
            <Text style={styles.txtPriceItem}> 141.800 đ</Text>
            <View style={styles.boxSLItem}>
              <View style={styles.sLItem}>
                <TouchableOpacity style={styles.btnSelectSL}>
                  <Image
                    style={styles.imgSL}
                    source={require('../assets/btnminus.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.txtSL}>11</Text>
                <TouchableOpacity style={styles.btnSelectSL}>
                  <Image
                    style={styles.imgSL}
                    source={require('../assets/btnadd.png')}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.btnMuaSau}>
                <Text style={styles.txtMuaSau}>Mua sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.boxMaGGDaLuu}>
          <Text style={styles.txtMaGGDaLuu}> Mã giảm giá đã lưu</Text>
          <TouchableOpacity style={styles.btnMaGGDaLuu}>
            <Text style={styles.txtBtnMaGGDaLuu}>Xem tại đây</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxSuDungGiamGia}>
          <View style={styles.boxGiamGia}>
            <View style={styles.iconMaGG}>

            </View>
            <Text style={styles.txtMaGG}>Mã giảm giá</Text>
          </View>
          <TouchableOpacity style={styles.btnApDung}>
            <Text style={styles.txtBtnApDung}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerLinkGiamGia}>
        <Text style={styles.txtCoPhieuQua}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <TouchableOpacity style={styles.btnNhapMaGG}>
          <Text style={styles.txtBtnNhapMaGG}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerTinhTien}>
        <View style={styles.boxTamTinh}>
          <Text style={styles.txtTitleTamTinh}>Tạm tính</Text>
          <Text style={styles.txtTienTamTinh}>141.800 đ</Text>
        </View>
        <View style={styles.footerTinhTien}>
          <View style={styles.boxThanhTien}>
            <Text style={styles.txtTitleThanhTien}>Tổng tiền</Text>
            <Text style={styles.txtThanhTien}>141.800 đ</Text>
          </View>
          <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btnDatHang}>
              <Text style={styles.txtBtnDatHang}>TIẾN HÀNH ĐẶT HÀNG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    gap: 15
  },

  //Item
  containerItem: {
    flex: 9,
    // gap:10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  boxItem: {
    flex: 4,
    width: "90%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  imgItem: {
    flex: 3,
    height: "100%"
  },

  boxInfoItem: {
    flex: 5,
    height: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  txtNameItem: {
    flex: 1,
    fontSize: 12,
    fontWeight: 700
  },
  txtNhaCCItem: {
    flex: 1,
    fontSize: 12,
    fontWeight: 700
  },
  txtPriceGiamItem: {
    flex: 1,
    fontSize: 18,
    fontWeight: 700,
    color: "#EE0D0D",
  },
  txtPriceItem: {
    flex: 1,
    fontSize: 12,
    fontWeight: 700,
    color: "gray",
    textDecorationLine: 'line-through',
  },

  boxSLItem: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  sLItem: {
    // width:"90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  btnSelectSL: {
    width: 20
  },
  imgSL: {
    width: 20,
    height: 20,
  },
  txtSL: {
    width: 35,
    fontSize: 12,
    fontWeight: 700,
    textAlign: "center"
  },

  txtMuaSau: {
    fontSize: 16,
    fontWeight: 700,
    color: "#134FEC"
  },

  boxMaGGDaLuu: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 30,
    gap: 20,
  },

  txtMaGGDaLuu: {
    fontSize: 16,
    fontWeight: 700,
  },
  txtBtnMaGGDaLuu: {
    fontSize: 16,
    fontWeight: 700,
    color: "#134FEC"
  },

  boxSuDungGiamGia: {
    flex: 2,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },

  boxGiamGia: {
    flex: 7,
    flexDirection: "row",
    height: 50,
    padding: 15,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderBlockColor: "black",
    borderRadius: 2
  },

  iconMaGG: {
    flex: 1,
    height: "100%",
    backgroundColor: "#F2DD1B",
    justifyContent: "center",
    alignItems: "center",
  },
  txtMaGG: {
    flex: 4,
    fontSize: 20,
    fontWeight: 700,
  },

  btnApDung: {
    flex: 3.5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A5EB7",
    borderRadius: 5
  },

  txtBtnApDung: {
    fontSize: 18,
    fontWeight: 700,
    color: "white"
  },

  //Ma giam gia
  boxNhapMaGG: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  //Link giam gia
  containerLinkGiamGia: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    paddingTop: 10,
    // paddingLeft:5,
    gap:15
  },
  txtCoPhieuQua: {
    fontSize: 12,
    fontWeight: 700,
  },
  txtBtnNhapMaGG: {
    fontSize: 12,
    fontWeight: 700,
    color: "#134FEC"
  },

  //Tinh tien
  containerTinhTien: {
    flex: 6,
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxTamTinh: {
    width: "100%",
    height: 50,
    padding:20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  txtTitleTamTinh:{
    fontSize: 20,
    fontWeight: 700,
  },
  txtTienTamTinh:{
    fontSize: 20,
    fontWeight: 700,
    color:"#E53935"
  },

  footerTinhTien:{
    width:"100%"
  },

  boxThanhTien: {
    width: "100%",
    height: 50,
    padding:20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  txtTitleThanhTien:{
    fontSize: 20,
    fontWeight: 700,
    color:"#808080"
  },
  txtThanhTien:{
    fontSize: 20,
    fontWeight: 700,
    color:"#E53935"
  },

  //bth dathang
  containerBtn: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  btnDatHang:{
    height: 50,
    width: "90%",
    backgroundColor:"#E53935",
    justifyContent: "center",
    alignItems: "center"
  },
  txtBtnDatHang:{
    fontSize: 20,
    fontWeight: 700,
    color:"white"
  },
});
