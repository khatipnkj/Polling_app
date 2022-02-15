import { StyleSheet, TouchableOpacity,ScrollView, Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Options from "../components/Options";
import Icon from "react-native-vector-icons/FontAwesome";




const Poll = () => {

  // const [Title,setTitle] = useState('');
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('https://secure-refuge-14993.herokuapp.com/list_polls')
      .then(response => response.json())
      .then(data => {
      setData(data.data)
       
      })
  },[data])
  // console.log(data)
  const deletePoll = (id) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    };
    fetch(`https://secure-refuge-14993.herokuapp.com/delete_poll?id=${id}`,requestOptions)
      // .then(response => response.json())
      // .then(data => console.log(data))
  }

  return (
    
    <ScrollView style={{ marginHorizontal: 10 }}>
      <View
        style={{
          width: 300,
          display: "flex",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={{ color: "red", fontSize: 25 }}>All Polls</Text>
      </View>
      {
        data?.map((dataObj)=>(

                <View key={dataObj._id} >
                  <View style={{width:300,display:'flex',flexDirection:'row',alignItems:'center',marginVertical:20,justifyContent:'space-between'}}> 
                    <Text style={{fontSize:25}}>{dataObj.title}</Text>
                    <TouchableOpacity onPress={() => deletePoll(dataObj._id)} style={{ padding:2,borderRadius:5}}><Icon name="trash" size={30} color="red"></Icon></TouchableOpacity>
                  </View>
                  
                  <Options dataObj={dataObj }/>
                  {/* <View
                    style={{
                      width: 300,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      marginVertical: 5,
                    }}
                    >
                    <TouchableOpacity
                      style={{ borderWidth: 1, width: 15, height: 15, marginRight: 5 }}
                      ></TouchableOpacity>
                    <Text>{dataObj.options[1].option}</Text>
                  </View> */}
                  {/* <View
                    style={{
                      width: 300,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      marginVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      style={{ borderWidth: 1, width: 15, height: 15, marginRight: 5 }}
                    ></TouchableOpacity>
                    <Text>{dataObj.options[2].option}</Text>
                  </View>
                  <View
                    style={{
                      width: 300,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      marginVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      style={{ borderWidth: 1, width: 15, height: 15, marginRight: 5 }}
                    ></TouchableOpacity>
                    <Text>{dataObj.options[3].option}</Text>
                  </View> */}
                </View>
        ))
      } 
                  
    </ScrollView>
  );
};

export default Poll;

const styles = StyleSheet.create({});
