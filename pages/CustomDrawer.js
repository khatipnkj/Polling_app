import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
// import { StatusBar } from 'expo-status-bar'

const CustomDrawer = ({ navigation }) => {
  const clearLocal = () => {
    AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.Outercontainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Poll")}
          style={styles.touchOp}
        >
          <Icon name="list" size={30} color="#fff"></Icon>
          <Text style={styles.txtStyle}>Polls</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Createpoll")}
          style={styles.touchOp}
        >
          <Icon name="user-plus" size={30} color="#fff"></Icon>
          <Text style={styles.txtStyle}>CreatePoll</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Userlist")}
          style={styles.touchOp}
        >
          <Icon name="users" size={30} color="#fff"></Icon>
          <Text style={styles.txtStyle}>Userlist</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => clearLocal()} style={styles.touchOp}>
          <Icon name="sign-out" size={30} color="#fff"></Icon>
          <Text style={styles.txtStyle}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  Outercontainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  touchOp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "red",
    paddingHorizontal: 5,
  },
  txtStyle: {
    fontSize: 30,
    color: "#fff",
    marginLeft: 10,
  },
});
