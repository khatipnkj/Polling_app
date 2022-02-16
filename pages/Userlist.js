import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Item from "../components/Item";
// import { } from "react-native-web";

const Userlist = () => {
  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://secure-refuge-14993.herokuapp.com/list_users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      });
  }, []);
  // console.log(Data)
  const renderItem = ({ item }) => (
    <Item username={item.username} role={item.role} />
  );
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View
        style={{
          width: 340,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          borderWidth: 1,
        }}
      >
        <View style={styles.txtStyle}>
          <Text style={{ fontSize: 25, color: "red" }}>UserName</Text>
        </View>
        <View style={styles.txtStyle}>
          <Text style={{ fontSize: 25, color: "red" }}>Role</Text>
        </View>
      </View>
      {loader && (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <ActivityIndicator color="red" size="large" />
        </View>
      )}
      <FlatList
        data={Data.data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        removeClippedSubviews
        maxToRenderPerBatch={15}
      />
      {/* {Data.data?.map((dataObj) => (

        <View key={dataObj._id} style={{display:'flex',flexDirection:'row',borderWidth:1,width:340,justifyContent:'space-between'}}>
          <View style={styles.txtStyle}><Text>{dataObj.username}</Text></View>
          <View style={styles.txtStyle}><Text>{dataObj.role}</Text></View>
        </View>
      ))} */}
    </View>
  );
};

export default Userlist;

const styles = StyleSheet.create({
  txtStyle: {
    // borderWidth:1,
    width: 120,
    alignItems: "center",
  },
});
