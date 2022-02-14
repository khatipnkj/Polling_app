import { StyleSheet, TextInput, Button, Text, View } from "react-native";
import React from "react";

const CreatePoll = () => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View
        style={{
          width: 300,
          display: "flex",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={{ color: "red", fontSize: 25 }}>Add your Poll</Text>
      </View>
      <View style={{ width: 300, marginBottom: 15 }}>
        <Text>Enter poll title</Text>
        <TextInput
          style={{ width: 300, borderWidth: 1, borderRadius: 5 }}
        ></TextInput>
      </View>
      <View style={{ width: 300 }}>
        <Text>Option: 1</Text>
        <TextInput
          style={{ width: 300, borderWidth: 1, borderRadius: 5 }}
        ></TextInput>
      </View>
      <View style={{ width: 300 }}>
        <Text>Option: 2</Text>
        <TextInput
          style={{ width: 300, borderWidth: 1, borderRadius: 5 }}
        ></TextInput>
      </View>
      <View style={{ width: 300 }}>
        <Text>Option: 3</Text>
        <TextInput
          style={{ width: 300, borderWidth: 1, borderRadius: 5 }}
        ></TextInput>
      </View>
      <View style={{ width: 300 }}>
        <Text>Option: 4</Text>
        <TextInput
          style={{ width: 300, borderWidth: 1, borderRadius: 5 }}
        ></TextInput>
      </View>
      <View style={{ marginTop: 40 }}>
        <Button title="Add Poll" />
      </View>
    </View>
  );
};

export default CreatePoll;

const styles = StyleSheet.create({});
