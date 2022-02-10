import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [loginDetails, setloginDetails] = useState({
    Credentials: [{ Username: "", Pwd: "", id: 0 }],
  });

  const hndleloginbtn = () => {
    setloginDetails({
      Credentials: [
        ...loginDetails.Credentials,
        {
          Username: username,
          Pwd: pwd,
          id: loginDetails.Credentials.length,
        },
      ],
    });
    console.log(loginDetails);
    setUsername("");
    setPwd("");
  };

  return (
    <View>
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          placeholder="Name"
        />
      </View>
      <View style={styles.container}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="@xyz"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.loginbtn} onPress={hndleloginbtn}>
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text>Not a user, SignUp first! </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 300,
    // padding:2
    paddingHorizontal: 5,
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
