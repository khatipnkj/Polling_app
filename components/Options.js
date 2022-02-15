import { StyleSheet,TouchableOpacity,Button, Text, View } from "react-native";
import React,{useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Options = ({dataObj}) => {
    const [selectedOption,setSelectedOption] =useState('');
    const [token,setToken] = useState('');

    const sbmtPoll = (id) => {
        const requestOptions = {
            method: 'POST',
            headers: { access_token: token },
            body: JSON.stringify({})
          };
        fetch(`https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${selectedOption}`,requestOptions)
            // .then(response => response.json())
            // .then(data => console.log(data))
        }
        

    useEffect(()=>{
        // console.log(loginDetails)
    
        const getData = async () => {
          try {
            const value = await AsyncStorage.getItem('token')
            if(value !== null) {
              // value previously stored
              setToken(value)
            }
          } catch(e) {
            // error reading value
            console.log(e)
          }
        }
        getData();
    
      },[])
    // console.log(dataObj)
  return (
    <View>
        {dataObj.options.map((option,i)=>(
        <View key={i}>
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
            style={ selectedOption === option.option?styles.styletrue:styles.stylefalse}
            onPress={()=>setSelectedOption(option.option)}
            ></TouchableOpacity>
            <Text>{option.option}</Text>
        </View>
        </View>

    ))}
        <View style={{ marginTop: 10 }}>
            <Button onPress={() => sbmtPoll(dataObj._id)} disabled={!selectedOption} title="Submit poll" />
        </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
   styletrue:{
    borderWidth: 1, 
    width: 15, 
    height: 15, 
    marginRight: 5,
    backgroundColor:'skyblue' 
   },
   stylefalse:{
    borderWidth: 1, 
    width: 15, 
    height: 15, 
    marginRight: 5,
    
   }
});
