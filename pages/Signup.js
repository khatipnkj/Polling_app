import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Platform,
  StatusBar
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import React, { useEffect, useState } from "react";

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("--Select a Role--");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");

  const hndleSignUp = () => {
    // console.log(role)
    if(username!==''&&pwd!==""&&cpwd!==""&&role!==""){
      if(pwd===cpwd){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({})
        };
        fetch(`https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${pwd}&role=${role}`,requestOptions)
          .then(response => response.json())
          .then(data => data.error?alert("account already exists!"):alert("SignUp completed! Please Login"))
        setUsername("");
        setRole("--Select a Role--");
        setPwd("");
        setCpwd("");
   
      }
      else{
        alert("Confirm password is not same!")
        setPwd("");
        setCpwd("");
        
      }
      
    }
    else{
      alert("feild missing")
          
    }
  }
  
  return (
    <View style={styles.vcontainer}>
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          value={username}
          onChangeText={(e) => setUsername(e)}
          style={styles.input}
          placeholder="Name"
        />
      </View>
      <View style={styles.container}>
        <Text>Role</Text>
        
        <SelectDropdown
            data={["Admin","Guest"]}
            onSelect={(selectedItem) => {
              setRole(selectedItem)
            }}
            defaultButtonText={role}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem;
            }}
            // rowTextForSelection={(item, index) => {
            //   return item;
            // }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
          />
      </View>
      <View style={styles.container}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={pwd}
          onChangeText={(e) => setPwd(e)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.container}>
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={cpwd}
          onChangeText={(e) => setCpwd(e)}
          secureTextEntry={true}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.loginbtn} onPress={hndleSignUp}>
          <Text style={{ color: "white" }}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{color:'blue'}}onPress={()=>{navigation.navigate('Login')}}>If Already SignUp! please Login </Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  vcontainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: Platform.OS === "android"?StatusBar.currentHeight:0
    // marginVertical:30,
    // marginHorizontal:20
    // justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: 300,
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
    marginVertical: 10,
    backgroundColor: "red",
  },
  dropdown:{
    width:500
  },
  dropdown1BtnStyle: {
    width: "84%",
    height: 35,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
    padding:0
  },
  dropdown1BtnTxtStyle:{
    fontSize:15
  }
});
