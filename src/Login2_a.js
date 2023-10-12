import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { TextInput } from "react-native-web";

export default function App() {
    var listAccount = [
        {name1:"user1",password:"pw1"},
        {name1:"user2",password:"pw2"},
        {name1:"user3",password:"pw3"}
    ]
    const [showPassWord, setShowPassWord] = useState(true)
    const [pathEye, setPathEye] = useState(require('../assets/notEye.png'))
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const changeEye = () => {
        setPathEye(!showPassWord ? require('../assets/eye.png') : require('../assets/notEye.png'))
        setShowPassWord(!showPassWord)
    }
    const pressLogin = ()=>{
        var user = name
        var pw = password 
        listAccount.forEach((v,i)=>{
            if(v.name1 == user && v.password == pw){
                alert("Login success")
                return
            }
        })
        alert("Login fail")
        return
    }
    return (
        <LinearGradient
            colors={['#FBCB00', '#BF9A00']}
            style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.textTilte}>LOGIN</Text>
            </View>
            <SafeAreaView style={styles.containerInputForm}>
                <View style={styles.inputForm}>
                    <Image style={styles.iconForm} source={require('../assets/user.png')} />
                    <TextInput placeholder='Name' style={styles.inputName} value={name} onChangeText={(text) => setName(text)} />
                </View>
                <View style={styles.inputForm}>
                    <Image style={styles.iconForm} source={require('../assets/lock.png')} />
                    <TextInput placeholder='Password' style={styles.inputPassword} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={showPassWord} />
                    <TouchableOpacity style={styles.btnEye} onPress={changeEye}>
                        <Image style={styles.iconEye} source={pathEye} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <View style={styles.containerBtnLogin}>
                <TouchableOpacity style={styles.btnLogin} onPress={pressLogin}>
                    <Text style={styles.textBtnLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerFooter}>
                <Text style={styles.txtFooter}>CREATE ACCOUNT</Text>
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTitle: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    textTilte: {
        fontSize: 30,
        fontWeight: 700,
        marginLeft: 20
    },

    containerInputForm: {
        flex: 3,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    inputForm: {
        flexDirection: "row",
        width: '90%',
        height: 54,
        padding: 10,
        marginTop: 20,
        backgroundColor: "rgba(196, 196, 196, 0.30)"
    },
    iconForm: {
        flex: 1,
        // width:32,
        // height: 32
    },
    inputName: {
        flex: 9,
        fontSize: 18,
        fontWeight: 400,
        marginLeft: 10,
    },

    inputPassword: {
        flex: 8,
        fontSize: 18,
        fontWeight: 400,
        marginLeft: 10,
    },
    btnEye: {
        flex: 1.2
    },
    iconEye: {
        flex: 1
    },

    containerBtnLogin: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    btnLogin: {
        width: '90%',
        height: 45,
        backgroundColor: "#060000",
        justifyContent: "center",
        alignItems: "center",
    },
    textBtnLogin: {
        fontSize: 20,
        fontWeight: 700,
        color: "#FFF"
    },

    containerFooter: {
        flex: 3,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    txtFooter: {
        fontSize: 20,
        fontWeight: 700,
        marginTop: 50,
    }
})

