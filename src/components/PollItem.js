import { StyleSheet, Text, View, TouchableOpacity, Icon } from "react-native";
import React from "react";
import Options from "./Options";

const PollItem = ({ item }) => {
  const deletePoll = (id) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    fetch(
      `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${id}`,
      requestOptions
    );
  };
  return (
    <View>
      <View
        style={{
          width: 300,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 20,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 25 }}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => deletePoll(item._id)}
          style={{ padding: 2, borderRadius: 5 }}
        >
          <Icon name="trash" size={30} color="red"></Icon>
        </TouchableOpacity>
      </View>

      <Options dataObj={item} />
    </View>
  );
};

export default PollItem;

const styles = StyleSheet.create({});
