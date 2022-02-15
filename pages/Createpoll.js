import { StyleSheet, TextInput, Button, Text, View } from "react-native";
import React, {useState} from "react";

const CreatePoll = () => {
  const [pollData,setPollData] = useState({
    Title:'',
    opt1:'',
    opt2:'',
    opt3:'',
    opt4:'',
  });
  const AddData = (key,value) => {
    setPollData({
      ...pollData,
      [key]:value
    })
  } 
  // console.log(pollData)
  const AddPoll = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    };
    fetch(`https://secure-refuge-14993.herokuapp.com/add_poll?title=${pollData.Title}%20polll&options=${pollData.opt1}____${pollData.opt2}____${pollData.opt3}____${pollData.opt4}`,requestOptions)
      .then(response => response.json())
      .then(data => data.error?alert('Poll not added'):alert('Poll added'))
    setPollData({
      Title:'',
      opt1:'',
      opt2:'',
      opt3:'',
      opt4:'',
    })
  }
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
          value={pollData.Title}
          onChangeText={(value) => AddData('Title',value)}
        ></TextInput>
      </View>
      <View style={{ width: 300 }}>
        <Text>Option: 1</Text>
        <TextInput
          style={{ width: 300, borderWidth: 1, borderRadius: 5 }}
          value={pollData.opt1}
          onChangeText={(value) => AddData('opt1',value)}
        ></TextInput>
      </View>
      <View style={{ width: 300 }}>
        <Text>Option: 2</Text>
        <TextInput
          style={{ width: 300, borderWidth: 1, borderRadius: 5 }}
          value={pollData.opt2}
          onChangeText={(value) => AddData('opt2',value)}
        ></TextInput>
      </View>
      <View style={{ width: 300 }}>
        <Text>Option: 3</Text>
        <TextInput
          style={{ width: 300, borderWidth: 1, borderRadius: 5 }}
          value={pollData.opt3}
          onChangeText={(value) => AddData('opt3',value)}
        ></TextInput>
      </View>
      <View style={{ width: 300 }}>
        <Text>Option: 4</Text>
        <TextInput
          style={{ width: 300, borderWidth: 1, borderRadius: 5 }}
          value={pollData.opt4}
          onChangeText={(value) => AddData('opt4',value)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 40 }}>
        <Button onPress={AddPoll} title="Add Poll" />
      </View>
    </View>
  );
};

export default CreatePoll;

const styles = StyleSheet.create({});
