import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Options from "../components/Options";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
// import PollItem from "../components/PollItem";

const PollItem = ({ item }) => {
  const [loader, setLoader] = useState(false);
  const deletePoll = (id) => {
    setLoader(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    fetch(
      `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${id}`,
      requestOptions
    );
    // setLoader(false)
  };
  return (
    <View>
      {loader ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <View>
          <View
            style={{
              width: 340,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
              justifyContent: "space-between",
              borderBottomWidth: 3,
              borderBottomColor: "#292a2b",
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
      )}
    </View>
  );
};

const Poll = () => {
  // const [Title,setTitle] = useState('');
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://secure-refuge-14993.herokuapp.com/list_polls")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);

        setLoader(false);
      });
    // setLoader(true)
  }, [data]);
  // console.log(data)
  const renderItem = ({ item }) => <PollItem item={item} />;

  return (
    <View style={{ marginHorizontal: 10 }}>
      <View
        style={{
          width: 340,
          display: "flex",
          alignItems: "center",
          // marginVertical: ,
          backgroundColor: "#292a2b",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 25 }}>All Polls</Text>
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
          <ActivityIndicator
            animating={true}
            size="large"
            color="red"
            style={[styles.container, styles.horizontal]}
          />
        </View>
      )}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default Poll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
