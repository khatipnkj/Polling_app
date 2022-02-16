import {
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";

const Option = ({ option, selectedOption, setSelectedOption }) => {
  return (
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
        style={selectedOption === option ? styles.styletrue : styles.stylefalse}
        onPress={() => setSelectedOption(option)}
      ></TouchableOpacity>
      <Text>{option}</Text>
    </View>
  );
};

const Options = ({ dataObj }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [token, setToken] = useState("");
  const [pollSubmit, setPollSubmit] = useState("");

  const sbmtPoll = (id) => {
    const requestOptions = {
      method: "POST",
      headers: { access_token: token },
      body: JSON.stringify({}),
    };
    fetch(
      `https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${selectedOption}`,
      requestOptions
    );
    // .then(response => response.json())
    // .then(data => setSelectedOption(''))
    // .then(setSelectedOption(''))
    setSelectedOption("");
    setPollSubmit("Submited !");
  };

  useEffect(() => {
    // console.log(loginDetails)

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          // value previously stored
          setToken(value);
        }
      } catch (e) {
        // error reading value
        console.log(e);
      }
    };
    getData();
  }, []);
  // console.log(dataObj)
  const renderItem = ({ item }) => (
    <Option
      option={item.option}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />
  );
  return (
    <View style={{ marginBottom: 20 }}>
      {setPollSubmit ? (
        <View>
          <Text style={{ color: "red" }}>{pollSubmit}</Text>
        </View>
      ) : null}
      <FlatList
        data={dataObj.options}
        renderItem={renderItem}
        keyExtractor={(item, i) => i}
      />
      <View style={{ marginBottom: 40 }}>
        <Button
          onPress={() => sbmtPoll(dataObj._id)}
          disabled={!selectedOption}
          title="Submit poll"
          color="#2d2c2e"
          style={{ borderRadius: 10 }}
        />
      </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  styletrue: {
    borderWidth: 1,
    width: 15,
    height: 15,
    marginRight: 5,
    backgroundColor: "#292a2b",
  },
  stylefalse: {
    borderWidth: 1,
    width: 15,
    height: 15,
    marginRight: 5,
  },
});
