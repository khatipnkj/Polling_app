import { StyleSheet, Text,ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";

const Userlist = () => {
  const [Data,setData] = useState([]);
  useEffect(()=>{
    fetch('https://secure-refuge-14993.herokuapp.com/list_users')
      .then(response => response.json())
      .then(data => setData(data))
  },[]);
  // console.log(Data)
  return (
    <ScrollView style={{ marginHorizontal: 10 }}>
      <View
        style={{
          width: 300,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          borderWidth:1
        }}
      >
        <View style={styles.txtStyle}><Text style={{ fontSize: 25, color: "red" }}>UserName</Text></View>
        <View style={styles.txtStyle}><Text style={{ fontSize: 25, color: "red" }}>Role</Text></View>
      </View>
      {Data.data?.map((dataObj) => (

        <View key={dataObj._id} style={{display:'flex',flexDirection:'row',borderWidth:1,width:300,justifyContent:'space-between'}}>
          <View style={styles.txtStyle}><Text>{dataObj.username}</Text></View>
          <View style={styles.txtStyle}><Text>{dataObj.role}</Text></View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Userlist;

const styles = StyleSheet.create({
  txtStyle:{
    // borderWidth:1,
    width:120,
    alignItems:'center'
  }
});
