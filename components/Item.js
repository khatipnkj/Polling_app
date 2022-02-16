import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Item = ({ username, role }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        width: 340,
        justifyContent: "space-between",
      }}
    >
      <View style={styles.txtStyle}>
        <Text>{username}</Text>
      </View>
      <View style={styles.txtStyle}>
        <Text>{role}</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});
