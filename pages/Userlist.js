import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Userlist = () => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View
        style={{
          width: 300,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 25, color: "red" }}>UserName</Text>
        <Text style={{ fontSize: 25, color: "red" }}>Role</Text>
      </View>
    </View>
  );
};

export default Userlist;

const styles = StyleSheet.create({});
