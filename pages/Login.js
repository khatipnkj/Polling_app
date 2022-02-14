import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState,useEffect } from "react";
// import Input from "../components/Input";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  // const [loginDetails, setloginDetails] = useState({ Username: null, Pwd: null });

  const hndleloginbtn = () => {
    // console.log(username)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    };
    fetch(`https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${pwd}`,requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data.error === 0){
          navigation.navigate('Home')
          storeData(data.token);
        }
        else{
          alert(data.data)
        }
        // data.error?:()=>{navigation.navigate('Home')}
      })
    // setloginDetails(
    //     {
    //       Username: username,
    //       Pwd: pwd,
    //       // id: loginDetails.Credentials.length,
    //     });
    // console.log(loginDetails);
    setUsername("");
    setPwd("");
  };
  const storeData = async (token) => {
    try {
      await AsyncStorage.setItem('token', token)
    } catch (e) {
      // saving error
      console.log(e)
    }
  }

  // function getData({...data}){
  //   console.log(data)
  // }
  useEffect(()=>{
    // console.log(loginDetails)

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('token')
        if(value !== null) {
          // value previously stored
          navigation.navigate('Home')
        }
      } catch(e) {
        // error reading value
        console.log(e)
      }
    }
    getData();

  },[])

  return (
    <View style={styles.vcontainer}>
      {/* <Input lblname="UserName" func={getData}/> */}
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          value={username}
          onChangeText={(e) => setUsername(e)}
          style={styles.input}
          placeholder="Name"
        />
      </View>
      {/* <Input lblname="Password" func={getData}/> */}
      <View style={styles.container}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={pwd}
          onChangeText={(e) => setPwd(e)}
          placeholder="@xyz"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.loginbtn} onPress={hndleloginbtn}>
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{color:'blue'}} onPress={() => {navigation.navigate("SignUp")}}>Not a user, SignUp first! </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  vcontainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: Platform.OS === "android"?StatusBar.currentHeight:0
    // marginVertical:30,
    // marginHorizontal:20
    // justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: 300,
    // padding:2
    paddingHorizontal: 5,
    borderRadius:8,
    height:35
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  loginbtn: {
    padding: 5,
    paddingHorizontal: 10,
    //   borderWidth:1,
    marginVertical: 10,
    backgroundColor: "red",
  },
});
