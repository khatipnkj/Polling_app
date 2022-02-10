import { StyleSheet,TextInput,TouchableOpacity, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [cpwd,setCpwd] = useState('');
  const [signupdetails, setSignupdetails] = useState({
      credentials:[
          {Username:null,Email:null,Pwd:null,id:null}
      ]
  })

  const hndleSignUp = () => {
    
    setSignupdetails({
        credentials:[...signupdetails.credentials,{Username:username,Email:email,Pwd:pwd,id:signupdetails.credentials.length}]
    })
    setUsername('')
    setEmail('')
    setPwd('')
    setCpwd('')
  }

  useEffect(()=>{
    console.log(signupdetails)
  },[signupdetails])
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
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="@xyz"
        />
      </View>
      <View style={styles.container}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.container}>
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={cpwd}
          onChange={(e) => setCpwd(e.target.value)}
          secureTextEntry={true}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.loginbtn} onPress={hndleSignUp} >
          <Text style={{ color: "white" }}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text>If Already SignUp! please Login </Text>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 300,
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
        marginVertical: 10,
        backgroundColor: "red",
      },
})